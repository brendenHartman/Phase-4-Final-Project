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
const [reload, setReload] = useState(false)

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Must enter email"),
  username: yup.string().required('Must Enter Username').max(16).min(4), 
  password: yup.string().required('Must Enter Password').max(16).min(8),
  color: yup.string().default('white').optional(),
});

const formSchema2 = yup.object().shape({
  username: yup.string().required('Must Enter Username').max(16).min(4), 
  password: yup.string().required('Must Enter Password').max(16).min(8),
});

const formSchemaCar = yup.object().shape({
  make: yup.string().required("Car Must Have A Make").max(10).min(3),
  model: yup.string().required('Car Must Have A Model').max(16).min(3),
  type: yup.string().required("Car Must Have A Type")
})

const formSchemaMeet = yup.object().shape({
  name:  yup.string().required('Event Must Have A Name').max(30).min(3),
  type: yup.string().required("Event Must Have A Type"),
  tier1: yup.number().required('Event Must Have Some Tier 1 Tickets').max(100).min(1),
  tier2: yup.number().required('Event Must Have Some Tier 2 Tickets').max(100).min(1),
  tier3: yup.number().required('Event Must Have Some Tier 3 Tickets').max(100).min(1),
})

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
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data  => {if(data){
      console.log(user)
      setUser(data)
    }})
    .catch(error => console.log(error))
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
    .then(res => {
      if (res.ok){
        return res.json()
      }
    })
    .then(data  => setUser(data))
    .catch(error => console.log(error))
  },
});

const  formikCar = useFormik(  {
  initialValues: {
    make: "",
    model: "",
    type: "",
  },
  validationSchema: formSchemaCar,
  onSubmit: (values) => {
    fetch("/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
    })
    .then(data  => setReload(!reload))
    .catch(error => console.log(error))
  },
});

const  formikMeet = useFormik(  {
  initialValues: {
    name: "",
    type: "",
    tier1: '',
    tier2: '',
    tier3: '',
  },
  validationSchema: formSchemaMeet,
  onSubmit: (values) => {
    fetch("/meets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(res => {
      if (res.ok){
        return res.json()
      }
    })
    .then(data  => setReload(!reload))
    .catch(error => console.log(error))
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
        }
      })
      .catch(error => console.log(error))
    }
  });
  fetch('/cars')
  .then(r  => r.json())
  .then(data => setCars(data.filter((car) => car.driver_id === null)))
  .catch(error => console.log(error))
  fetch('/meets')
  .then(r  => r.json())
  .then(data => setMeets(data))
  .catch(error => console.log(error))
},[reload]) 

function handleDelete(event){
  fetch(`/drivers/${user.id}`,{
    method: 'DELETE',
  })
  .then(r => r.json())
  .then(data => setUser(null))
}

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
    setCars(cars.filter((car) => car.id !== carId))
    setReload(!reload)
    console.log(data)
  })
}

function handleLeave(event){
  const spotId = event.target.parentElement.id
  const tier = event.target.parentElement.getAttribute('tier')
  const meet  = event.target.parentElement.getAttribute('meet')
  console.log(meet)
  console.log(spotId)
  console.log(event.target.parentElement)
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      spot_id: spotId,
      tier: `${tier}`,
      meet: meet,
      task: 'leaveM'
    })
  })
  .then(r => r.json())
  .then(data => {
    setReload(!reload)
    console.log(data)})
  .catch(error => console.log(error))
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
    setCars(cars.filter((car) => car.id !== carId))
    setReload(!reload)
    console.log(data)
  })
  .catch(error => console.log(error))
}

function handleReserve(event){
  const meetId = event.target.parentElement.id
  const tier  = event.target.id
  fetch(`/meets/${meetId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      task: 'buy',
      tier: `${tier}`,
    })
  })
  .then(r => r.json())
  .then(data  => console.log(data))
  fetch(`/drivers/${user.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      meet_id: meetId,
      tier: `${tier}`,
      task: 'addM'
    })
  })
  .then(r => r.json())
  .then(data => {
    setReload(!reload)
    console.log(data)})
}

  function handleSignout(){
    fetch('/logout',{
      method: 'DELETE',
    })
    .then(setUser(null))
  }

  function handleColor(event){
    const newColor = event.target.id
    console.log(newColor)
    console.log(user.id)
    console.log(JSON.stringify({
      color: newColor,
      task: 'changeC'
    }))
    fetch(`/drivers/${user.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        color: newColor,
        task: 'changeC'
      })
    })
    .then(r => r.json())
    .then(data => {
      setReload(!reload)
      console.log(data)})
  }

  if (!user) return <Login formik={formik} formik2={formikLog}/>

  return (
  <>
    <NavBar user={user} handleClick={handleSignout} handleDelete={handleDelete}/>
    <Switch>
      <Route exact path="/">
        <Home  user={user} handleRemove={handleRemove} handleLeave={handleLeave} handleColor={handleColor}/>
      </Route>
      <Route exact path="/cars">
        <Cars cars={cars} user={user} handleClick={handleBuy} formikCar={formikCar}/>
      </Route>
      <Route exact path='/meets'>
        <Meets meets={meets} user={user} handleReserve={handleReserve}  formikMeet={formikMeet}/>
      </Route>
    </Switch>
  </>
  )
}

export default App;
