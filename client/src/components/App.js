import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import Login from './Login';
import Home from './Home';
import Cars from './Cars';
import Meets from './Meets';
import NavBar from './NavBar';

function App(){
const [cars, setCars] = useState([]);
const [meets, setMeets] = useState([]);
const [user, setUser] = useState(null);
const [myMeets, setMyMeets] = useState([]);
const [myCars, setMyCars] = useState([]);
const [reload, setReload] = useState(false)

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Must enter email"),
  username: yup.string().required('Must Enter Username').max(16).min(4), 
  password: yup.string().required('Must Enter Password').max(16).min(8),
  color: yup.string().optional(),
});

const formSchema2 = yup.object().shape({
  username: yup.string().required('Must Enter Username').max(16).min(4), 
  password: yup.string().required('Must Enter Password').max(16).min(8),
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
    .then(data  => {if(data){
      console.log(user)
      setUser(data)
    }})
  },
});

const formikLog = useFormik({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: formSchema2,
onSubmit: (values) => {
    fetch("/login", {
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

useEffect(() => {
  fetch("/check_session").then((r) => {
    if (r.ok) {
      r.json()
      .then((user) => {
        setUser(user)
        if(user && user.cars){ 
          console.log(user)
          setMyCars(user.cars)
          setMyMeets(user.spots)
        }
      })
    }
  });
  fetch('/cars')
  .then(r  => r.json())
  .then(data => setCars(data.filter((car) => car.driver_id === null)))
  fetch('/meets')
  .then(r  => r.json())
  .then(data => setMeets(data))
},[reload]) 

function handleRemove(event){
  const carId = event.target.parentElement.id
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify({
      car_id: carId,
      task: 'sellC'
    })
  }
  )
  .then(r => r.json()) 
  .then(data => {
    setMyCars(user.cars)
    setCars(cars.filter((car) => car.id !== carId))
    setReload(!reload)
    console.log(data)
  })
}

function handleLeave(event){
  const meetId = event.target.parentElement.id
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      meet_id: meetId,
      task: 'leaveM'
    })
  })
  .then(r => r.json())
  .then(data => {
    setMyMeets(user.spots)
    setReload(!reload)
    console.log(data)})
}

function handleBuy(event){
  const carId = event.target.parentElement.id
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify({
      car_id: carId,
      task: 'addC'
    })
  }
  )
  .then(r => r.json()) 
  .then(data => {
    setMyCars(user.cars)
    setCars(cars.filter((car) => car.id !== carId))
    setReload(!reload)
    console.log(data)
  })
}

function handleReserve(event){
  const meetId = event.target.parentElement.id
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      meet_id: meetId,
      task: 'addM'
    })
  })
  .then(r => r.json())
  .then(data => {
    setMyMeets(user.spots)
    setReload(!reload)
    console.log(data)})
}

  function handleSignout(){
    fetch('/logout',{
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
      setUser(null)
    })
  }

  if (!user) return <Login formik={formik} formik2={formikLog}/>

  return (
  <>
    <NavBar user={user} handleClick={handleSignout}/>
    <Switch>
      <Route exact path="/">
        <Home  user={user} garage={myCars} spots={myMeets} handleRemove={handleRemove} handleLeave={handleLeave}/>
      </Route>
      <Route exact path="/cars">
        <Cars cars={cars} user={user} handleClick={handleBuy}/>
      </Route>
      <Route exact path='/meets'>
        <Meets meets={meets} user={user} handleReserve={handleReserve}/>
      </Route>
    </Switch>
  </>
  )
}

export default App;
