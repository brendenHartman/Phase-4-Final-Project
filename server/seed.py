#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Driver, Car, CarMeet, Spot

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        Driver.query.delete()
        CarMeet.query.delete()
        Car.query.delete()
        Spot.query.delete()
        cars =  []
        mustang  = Car(make="Ford",model="Mustang",type="Muscle")
        cars.append(mustang)
        corvette = Car(make="Chevrolet",model="Corvette",type="Sport")
        cars.append(corvette)
        camaro = Car(make="Chevrolet",model="Camaro",type="Muscle")
        cars.append(camaro)
        f150 = Car(make="Ford",model="F150",type="Truck")
        cars.append(f150)
        supra = Car(make="Toyota",model="Supra",type="Sport")
        cars.append(supra)
        aventador  = Car(make="Lamborghini",model="Aventador",type="Super")
        cars.append(aventador)
        laferrari = Car(make="Ferrari",model="LaFerrari",type="Super")
        cars.append(laferrari)
        urus  = Car(make="Lamborghini",model="Urus",type="Super")
        cars.append(urus)
        veyron = Car(make="Bugatti",model="Veyron",type="Hyper")
        cars.append(veyron)
        ghost = Car(make="Rolls-Royce",model="Ghost",type="Luxury")
        cars.append(ghost)
        tacoma = Car(make="Toyota",model="Tacoma",type="Truck")
        cars.append(tacoma)
        db.session.add_all(cars)
        classic_meet = CarMeet(name="Manny's Muscle Meet",type="Muscle",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        super_meet = CarMeet(name="Sammy's Super Meet",type="Super",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        muscle_meet =  CarMeet(name="Tammy's Truck Meet",type="Truck",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        db.session.add(classic_meet)
        db.session.add(super_meet)
        db.session.add(muscle_meet)
        db.session.commit()
