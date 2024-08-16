#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Driver, Car, CarMeet

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        Driver.query.delete()
        cars =  []
        mustang  = Car(make="make",model="model",type="type")
        cars.append(mustang)
        corvette = Car(make="make",model="model",type="type")
        cars.append(corvette)
        camaro = Car(make="make",model="model",type="type")
        cars.append(camaro)
        f150 = Car(make="make",model="model",type="type")
        cars.append(f150)
        supra = Car(make="make",model="model",type="type")
        cars.append(supra)
        aventador  = Car(make="make",model="model",type="type")
        cars.append(aventador)
        laferrari = Car(make="make",model="model",type="type")
        cars.append(laferrari)
        urus  = Car(make="make",model="model",type="type")
        cars.append(urus)
        veyron = Car(make="make",model="model",type="type")
        cars.append(veyron)
        ghost = Car(make="make",model="model",type="type")
        cars.append(ghost)
        tacoma = Car(make="make",model="model",type="type")
        cars.append(tacoma)
        db.session.add_all(cars)
        classic_meet = CarMeet(name="name",type="type",start_date="start",end_date="end")
        super_meet = CarMeet(name="name",type="type",start_date="start",end_date="end")
        muscle_meet =  CarMeet(name="name",type="type",start_date="start",end_date="end")
        db.session.add(classic_meet)
        db.session.add(super_meet)
        db.session.add(muscle_meet)
        db.session.commit()
