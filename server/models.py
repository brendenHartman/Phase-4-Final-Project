from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt
#==========================================================================


class Car(db.Model,SerializerMixin):
    __tablename__ = 'cars'

    serialize_rules = ('-driver.cars',)

    id = db.Column(db.Integer, primary_key = True)
    make = db.Column(db.String)
    model = db.Column(db.String)
    type = db.Column(db.String)

    driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))
    driver = db.relationship('Driver', back_populates = 'cars')

    def __repr__(self):
        return f'<Car {self.id}, {self.make}, {self.model}, {self.type}>'

        
#==========================================================================


class CarMeet(db.Model,SerializerMixin):
    __tablename__ = 'car_meets'

    serialize_rules = ('-drivers.car_meets', '-spots.car_meet')

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    tier_1_tickets = db.Column(db.Integer)
    tier_2_tickets = db.Column(db.Integer)
    tier_3_tickets = db.Column(db.Integer)

    drivers = association_proxy('spots', 'driver', creator= lambda driver_obj: Spot(driver  = driver_obj))

    spots = db.relationship('Spot', back_populates = 'car_meet')

    def __repr__(self):
        return f'<Meet {self.id}, {self.type}, {self.start_date} to {self.end_date}>'


#==========================================================================


class Spot(db.Model, SerializerMixin):
    __tablename__ = 'spots'

    serialize_rules = ('-car_meet.spots', '-driver.spots')

    id = db.Column(db.Integer, primary_key = True)
    grade = db.Column(db.Integer)
    reserved = db.Column(db.Boolean)
    meet_name = db.Column(db.String)

    driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))
    driver =  db.relationship('Driver', back_populates = 'spots')

    car_meet_id = db.Column(db.Integer, db.ForeignKey('car_meets.id'))
    car_meet = db.relationship('CarMeet', back_populates = 'spots')

    def __repr__(self):
        return f'<Spot {self.id}, {self.grade}, {self.driver_id}, {self.car_meet_id}>'


#==========================================================================


class Driver(db.Model,SerializerMixin):
    __tablename__ = 'drivers'

    serialize_rules = ('-cars.driver', '-car_meets.drivers', '-spots.driver')

    id = db.Column(db.Integer, primary_key = True)
    email =  db.Column(db.String, nullable = False, unique = True)
    username = db.Column(db.String, nullable = False, unique = True)
    password = db.Column(db.String)
    color = db.Column(db.String)

    cars = db.relationship('Car', back_populates = 'driver')
    car_meets = association_proxy('spots', 'car_meet', creator= lambda meet_obj: Spot(meet  = meet_obj))
    spots = db.relationship('Spot', back_populates = 'driver')

    
    def __repr__(self):
        return f'<Driver {self.id}, {self.username}, {self.color}>'