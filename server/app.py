#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Car, CarMeet, Driver, Spot

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Cars(Resource):
    
    def get(self):
        pass
    def post(self):
        pass
    def patch(self):
        pass
    def delete(self):
        pass

class Drivers(Resource):
    
    def get(self):
        pass
    def post(self):
        pass
    def patch(self):
        pass
    def delete(self):
        pass

class Meets(Resource):
    
    def get(self):
        pass
    def post(self):
        pass
    def patch(self):
        pass
    def delete(self):
        pass

api.add_resource(Drivers, '/drivers')
api.add_resource(Cars,'/cars')
api.add_resource(Meets, '/meets')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

