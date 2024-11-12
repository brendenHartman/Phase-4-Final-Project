# Phase 4 fullstack Project

## Introduction

This project is a fullstack program that includes a React/Javascript Frontend and a Flask/Python Backend. 

This project is to show my knowledge on fullstack applications and the connection of client and server applications both made from scratch.

## Setup 

To install the frontend dependencies, use the command:
```bash
npm install --prefix client
```

To install the backend dependencies, use the command:
```bash
pipenv install
```

Finally to run the React app and Flask server simultaneously on your own machine, I have included Honcho which will allow you to use the command:
```bash
honcho start -f Procfile.dev
```
This should use ports 4000 and 5555 for the client and server respectively

## Important files structure
client
└──src
    ├── components
    │   ├── App.js
    │   ├── Car.js
    │   ├── CarForm.js
    │   ├── Cars.js
    │   ├── Home.js
    │   ├── Login.js
    │   ├── Meet.js
    │   ├── MeetForm.js
    │   ├── Meets.js
    │   ├── NavBar.js
    │   └── Spot.js
    ├── Index.css
    └── index.js

Server
├── app.py
├── config.py
├── instance
│   └── app.db
├── models.py
└── seed.py

## Functionality

Below is a quick walkthrough of every important file and function implemented in both the frontend and the backend.

### Components

#### Car

    The Car component handles the way a car object is structured when rendered in the app. It displays the basic object information and includes an event listener for when a car is purchased/sold.

#### CarForm
#### Cars
#### Home
#### Login
#### Meet
#### MeetForm
#### Meets
#### NavBar
#### Spot
#### App

### index.js

### Index.css

### What Goes into a README?

This README should serve as a template for your own- go through the important
files in your project and describe what they do. Each file that you edit (you
can ignore your migration files) should get at least a paragraph. Each function
should get a small blurb.

You should descibe your application first, and with a good level of detail. The
rest should be ordered by importance to the user. (Probably routes next, then
models.)

Screenshots 
