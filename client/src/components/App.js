import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import Login from './Login';
import Home from './Home';
import Car from "./Car";
import Spot from "./Spot";
import Cars from './Cars';
import Meets from './Meets';
import NavBar from './NavBar';

function App(){
const [cars, setCars] = useState([]);
const [meets, setMeets] = useState([]);
const [user, setUser]  = useState(null);
const [myMeets, setMyMeets]= useState([]);
const [myCars, setMyCars]= useState([<p>No Cars, Buy Cars And They Will Appear Here!</p>]);

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Must enter email"),
  username: yup.string().required('Must Enter Username').max(16).min(4), 
  password: yup.string().required('Must Enter Password').max(16).min(8),
  color: yup.string().optional(),
});

const formik = useFormik({
  initialValues: {
    email: "",
    username: "",
    password: "",
    color: '',
  },
  validationSchema: formSchema,
onSubmit: (values) => {
    fetch("/drivers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(res => res.json())
    .then(data  => setUser(data))
  },
});

const formikLog = useFormik({
});

useEffect(() => {
  fetch("/check_session").then((r) => {
    if (r.ok) {
      r.json()
      .then((user) => setUser(user))
      .then(() => setMyCars(user.cars.map((car)  => <Car id={car.id} car={car} text='Remove' handleClick={handleRemove}/>)))
    }
  });
  fetch('/cars')
  .then(r  => r.json())
  .then(data => setCars(data))
  fetch('/meets')
  .then(r  => r.json())
  .then(data => setMeets(data))
},[]) 


if (!user) return <Login formik={formik}/>

function handleRemove(event){
  console.log('remove')
}

function handleBuy(event){
  const carId = event.target.parentElement.id
  fetch(`/cars/${carId}`)
  .then(r =>  r.json())
  .then(car => {
    console.log(user)
    console.log(user.cars)
    fetch(`/drivers/${user.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:  JSON.stringify({car_id: carId})
    }
    )
    .then(r => r.json()) 
    .then(data => {setMyCars(user.cars.map((car)  => <Car id={carId} car={car} text='Remove' handleClick={handleRemove}/>))
      console.log(data)
    })
  })
}

function handleReserve(event){
  const meetId = event.target.parentElement.id
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({meet_id: meetId})
  })
  .then(r => r.json())
  .then(data => {setMyMeets(user.spots)
    console.log(data)})
}

  return (
  <>
    <NavBar user={user}/>
    <Switch>
      <Route exact path="/">
        <Home  user={user} garage={myCars} spots={myMeets}/>
      </Route>
      <Route exact path="/cars">
        <Cars cars={cars} user={user} handleClick={handleBuy}/>
      </Route>
      <Route exact path='/meets'>
        <Meets meets={meets} user={user}handleReserve={handleReserve}/>
      </Route>
    </Switch>
  </>
  )
}

export default App;
