# Phase 4 fullstack Project

## Introduction

This project is a fullstack program that includes a React/Javascript Frontend and a Flask/Python Backend. 

This project is to show my knowledge on fullstack applications and the connection of client and server applications both made from scratch. It's purpose is entirley as a showcase and is made to replicate a basic car enthusiast website in function and appearence.

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

## Usage

The app has 4 main pages that the user will be navigating between. 

#### login Page

![Login Page](<Screenshot (15).png>)
This is the welcoming page and where the user can create an account or sign in to an already existing one.

#### Home  Page

![Home Page](<Screenshot (16).png>)
This is the home page as well as the page that the user will see as soon as they login. It will include the users chosen username and their cars and spots below.

#### Cars Page

![Cars Page](<Screenshot (18).png>)
This page is where the car marketplace is and renders all cars in a list as well as includes a form for the user to create their own car with whatever data they wish.

#### Meets Page

![Meet Page](<Screenshot (19).png>)
![Meet Form](<Screenshot (20).png>)
This page is where all of the meets are listed as well as includes a form for the user to create their own meet if they decide to.

#### NavBar

The navbar is at the top of the app and includes navigation buttons to every afformentioned page includiong the ability to logout and go to the login page.

## Functionality

Below is a quick walkthrough of every important file and function implemented in both the frontend and the backend.

### Components

#### Car

The Car component handles the way a car object is structured when rendered in the app. It displays the basic object information and includes an event listener for when a car is purchased/sold.

#### CarForm

The CarForm component handles the way the CarForm is rendered on the car tab and uses formik to handle errors, state, values, validation, and submission of a new desired car object using user submitted data.

#### Cars

The Cars component handles the way the Cars tab is rendered and serves as the container for the Car, and CarForm components. It passes formik and event listener data to its children in Car and CarForm.

#### Home

The Home component handles the way the Home page is rendered and serves as the container for all the users Cars and Spots. Visually it includes basic user data like username and account theme/color.

#### Login

The Login component handles the way the Signup/Login page is rendered and includes two formik enabled forms for those purposes. 

#### Meet

The Meet component handles the way the Meet object is rendered and represented as jsx in the React app. It includes the basic data from a meet object like name and ticket amounts.

#### MeetForm

The MeetForm component handles the way the MeetForm is rendered on the meets tab and uses formik to handle errors, state, values, validation, and submission of a new desired meet object using user submitted data.

#### Meets

The Meets component handles the way that the Meets page is rendered. It is the container for all existing meet objects and the MeetForm Component.

#### NavBar

The NavBar component handles the way the NavBar is rendered at the top of the page and includes react-router Link elements to allow for dynamic rendering based on url endpoint

#### Spot

The Spot component handles the way the Spot object is rendered and represented as jsx in the React app. It includes the basic data from a spot object like the name of the meet it belongs to and its tier.

#### App

The App Component is essentially the base of the entire project and houses all of the functions and routes that are used throughout the project including event listeners, fetch's, formik etc.

### index.js

This file is the container of the entire app and App component and uses browserRouter and create root to create a root element for everythiing to render into based on the conditional route data held in App.

### Index.css

This is ALL of the css and styling used for every page and component in the React App.

##  Contribution

This project is a personal school deliverable and as such is not open to peer contribution at this time. 

Includes the use of honcho and the react app template
[Honcho Docs](https://honcho.readthedocs.io/en/latest/)
[App Template](https://github.com/learn-co-curriculum/python-p4-project-template)