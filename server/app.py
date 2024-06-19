#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Car, CarMeet, Driver

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

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



api.add_resource(Drivers, '/drivers')
api.add_resource(DriverId, '/drivers/<int:id>')
api.add_resource(Cars,'/cars')
api.add_resource(Meets, '/meets')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

