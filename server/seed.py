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
        data =  []
        mustang  = Car(make="Ford",model="Mustang",type="Muscle")
        data.append(mustang)
        corvette = Car(make="Chevrolet",model="Corvette",type="Sport")
        data.append(corvette)
        camaro = Car(make="Chevrolet",model="Camaro",type="Muscle")
        data.append(camaro)
        f150 = Car(make="Ford",model="F150",type="Truck")
        data.append(f150)
        supra = Car(make="Toyota",model="Supra",type="Sport")
        data.append(supra)
        aventador  = Car(make="Lamborghini",model="Aventador",type="Super")
        data.append(aventador)
        laferrari = Car(make="Ferrari",model="LaFerrari",type="Super")
        data.append(laferrari)
        urus  = Car(make="Lamborghini",model="Urus",type="Super")
        data.append(urus)
        veyron = Car(make="Bugatti",model="Veyron",type="Hyper")
        data.append(veyron)
        ghost = Car(make="Rolls-Royce",model="Ghost",type="Luxury")
        data.append(ghost)
        tacoma = Car(make="Toyota",model="Tacoma",type="Truck")
        data.append(tacoma)
        muscle_meet = CarMeet(name="Manny's Muscle Meet",type="Muscle",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        data.append(muscle_meet)
        super_meet = CarMeet(name="Sammy's Super Meet",type="Super",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        data.append(super_meet)
        truck_meet =  CarMeet(name="Tammy's Truck Meet",type="Truck",tier_1_tickets=3,tier_2_tickets=3,tier_3_tickets=3)
        data.append(truck_meet)
        brenden = Driver(email="brendenhart22@gmail.com",username="brendenHart",password="Brenden1",color='Orange')
        data.append(brenden)
        Silverado = Car(make="Chevrolet",model="Silverado",type="Truck",driver=brenden)
        data.append(tacoma)
        lyna = Driver(email="lynahart22@gmail.com",username="lynaHart",password="lyna1",color='Red')
        data.append(lyna)
        brandon = Driver(email="brandonhart22@gmail.com",username="brandonHart",password="Brandon1",color='Yellow')
        data.append(brandon)
        spot1 = Spot(grade=2,driver=brenden,car_meet=super_meet)
        data.append(spot1)
        spot2 = Spot(grade=3,driver=brenden,car_meet=muscle_meet)
        data.append(spot2)
        spot3 = Spot(grade=2,driver=lyna,car_meet=muscle_meet)
        data.append(spot3)
        spot4 = Spot(grade=3,driver=lyna,car_meet=muscle_meet)
        data.append(spot4)

        db.session.add_all(data)
        db.session.commit()
