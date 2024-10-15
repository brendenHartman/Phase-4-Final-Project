#!/usr/bin/env python3

from flask import request, session
from flask_restful import Resource


from config import app, db, api

from models import Car, CarMeet, Driver, Spot


class Cars(Resource):
    def get(self):
        cars = [car.to_dict() for car in Car.query.all()]
        return cars, 200
    def post(self):
        car = Car(
           make = request.get_json()['make'],
           model = request.get_json()['model'],
           type = request.get_json()['type'],
        )
        db.session.add(car)
        db.session.commit()
        return car.to_dict(), 201
    
class CarsId(Resource):
    def get(self,id):
        car = Car.query.filter_by(id=id).first().to_dict()
        return car, 200
    
class Meets(Resource):
    def get(self):
        meets = [meet.to_dict() for meet in CarMeet.query.all()]
        return meets, 200
    def post(self):
        meet = CarMeet(
            type = request.get_json()['type'],
            start_date = request.get_json()['start_date'],
            end_date = request.get_json()['end_date'],
        )
        db.session.add(meet)
        db.session.commit()
        return meet.to_dict(), 201
    
class MeetsId(Resource):
    def patch(self,id):
        task = request .get_json()['task']
        tier = request.get_json()['tier']
        meet = CarMeet.query.filter_by(id=id).first()
        if task == 'buy':
            if tier == "1":
                meet.tier_1_tickets = meet.tier_1_tickets - 1
                print(meet.tier_1_tickets)
            elif tier == "2":
               meet.tier_2_tickets = meet.tier_2_tickets - 1
            elif tier == "3":
                meet.tier_3_tickets = meet.tier_3_tickets - 1
        db.session.commit()
        return  meet.to_dict(), 200
    
class Drivers(Resource):
    def get(self):
        drivers = [driver.to_dict() for driver in Driver.query.all()]
        return drivers, 200

    def post(self):
        email = request.get_json()['email']
        driverExist = Driver.query.filter_by(email=email).first()

        if driverExist:
            return {'error': 'email in use'}, 401
        else: 
            driver = Driver(
                email=request.get_json()['email'],
                username=request.get_json()['username'],
                password=request.get_json()['password'],
                color=request.get_json()['color'],
            )
            db.session.add(driver)
            db.session.commit()
            session['user_id'] = driver.id
            print(driver.id)
            print(session['user_id'])
            return driver.to_dict(), 201

class DriverId(Resource):
    def get(self,id):
        driver = Driver.query.filter_by(id=id).first().to_dict()
        return driver, 200
    def post(self):
        driver = Driver(
            name  = request.get_json()['name'],
            color = request.get_json()['color'],
        )
        db.session.add(driver)
        db.session.commit()
        return driver.to_dict(), 201
    def patch(self, id):
        driver = Driver.query.filter_by(id=id).first()
        task = request.get_json()['task']
        if task == 'addC':
            car_id = request.get_json()['car_id']
            car = Car.query.filter_by(id=car_id).first()
            if car:
                print(car)
                print(driver)
                print(driver.cars)
                driver.cars.append(car)
                db.session.commit()
                return driver.to_dict(),200
        elif task == 'sellC':
            car_id = request.get_json()['car_id']
            car = Car.query.filter_by(id=car_id).first()
            if car:
                print(car)
                print(driver)
                print(driver.cars)
                driver.cars.remove(car)
                db.session.commit()
                return driver.to_dict(),200
        elif task == 'addM':
            meet_id = request.get_json()['meet_id']
            meet = CarMeet.query.filter_by(id=meet_id).first()
            if meet:
                tier  = request.get_json()['tier']
                spot = Spot(driver=driver, car_meet=meet, grade=tier, reserved=True)
                db.session.add(spot)
                db.session.commit()
                return driver.to_dict(), 200
        elif task == 'leaveM':
            spot_id = request.get_json()['spot_id']
            spot = Spot.query.filter_by(id=spot_id).first()
            print(spot)
            if spot:
                db.session.delete(spot)
                db.session.commit()
            return driver.to_dict(), 200
        elif task == 'changeC':
            color = request.get_json()['color']
            print(color)
            driver = Driver.query.filter_by(id=id).first()
            print(driver)
            driver.color = color
            db.session.commit()
            return driver.to_dict(),  200
        else:
            return {'error': 'no'}, 404
    def delete(self, id):
        driver = Driver.query.filter_by(id=id).first()
        db.session.delete(driver)
        db.session.commit()
        return  204

class Login(Resource):
    def post(self):
        driver = Driver.query.filter_by(username=request.get_json()['username']).first()
        if driver:
            session['user_id'] = driver.id
            return driver.to_dict(), 201
        else:
            return {'error': 'no'}, 401

class CheckSession(Resource):
    def get(self):
        if session['user_id']:
            driver = Driver.query.filter_by(id = session['user_id']).first()
            print(driver)
            return driver.to_dict(), 200
        else:
            return {'error': 'no'}, 401
        
class Logout(Resource):
    def delete(self):
        if session['user_id']:
            session['user_id'] = None
            return 204
        else:
            return {'error': 'no'}, 401

    
api.add_resource(Drivers, '/drivers', endpoint='drivers')
api.add_resource(DriverId, '/drivers/<int:id>')
api.add_resource(CarsId, '/cars/<int:id>')
api.add_resource(MeetsId, '/meets/<int:id>')
api.add_resource(Cars,'/cars', endpoint='cars')
api.add_resource(Meets, '/meets', endpoint='meets')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

app.secret_key = "ElbieJay22"
if __name__ == '__main__':
    app.run(port=5555, debug=True)

