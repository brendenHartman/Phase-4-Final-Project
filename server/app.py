#!/usr/bin/env python3

from flask import request, session
from flask_restful import Resource


from config import app, db, api

from models import Car, CarMeet, Driver


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
    
class Drivers(Resource):
    def get(self):
        drivers = [driver.to_dict() for driver in Driver.query.all()]
        return drivers, 200
    def post(self):
        driver = Driver(
            name  = request.get_json()['name'],
            color = request.get_json()['color'],
        )
        db.session.add(driver)
        db.session.commit()
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
    def patch(self):
        driver = Driver.query.filter_by(id=id).first()
        for attr in request.get_json():
            setattr(driver, attr, request.get_json().get(attr))
            db.session.add(driver)
            db.session.commit()
            return driver.to_dict(), 200
    def delete(self, id):
        driver = Driver.query.filter_by(id=id).first()
        db.session.delete(driver)
        db.session.commit()
        return "Driver Deleted Successfuly", 204

class Login(Resource):
    def post(self):
        driver = Driver.query.filter_by(username=request.get_json()['username']).first()
        if driver:
            session['driver_id'] = driver.id
            return driver.to_dict(), 201
        else:
            return {'error': 'no'}, 401

class CheckSession(Resource):
    def get(self):
        if session['driver_id']:
            driver = Driver.query.filter_by(id = session['driver_id']).first()
            return driver.to_dict(), 200
        else:
            return {'error': 'no'}, 401
        
class Logout(Resource):
    def delete(self):
        if session['driver_id']:
            session['driver_id'] = None
            return '', 204
        else:
            return {'error': 'no'}, 401 

class Signup(Resource):
    def post(self):
        json = request.get_json()
        if 'username' not in json:
            return {'error': 'no username'}, 422
        driver = Driver(
            username = json['username'],
            image_url = json['image_url'],
            color = json['color'],
        )
        driver.password_hash = json['password']
        db.session.add(driver)
        db.session.commit()
        session['driver_id'] = driver.id
        return driver.to_dict(), 201

api.add_resource(Drivers, '/drivers', endpoint='drivers')
api.add_resource(DriverId, '/drivers/<int:id>')
api.add_resource(Cars,'/cars', endpoint='cars')
api.add_resource(Meets, '/meets', endpoint='meets')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

