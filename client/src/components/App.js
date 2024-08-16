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
const [user, setUser]  = useState(null);

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

const formik2 = useFormik({
});

useEffect(() => {
  fetch("/check_session").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
},[]) 

function handleBuy(){}



if (!user) return <Login formik={formik}/>

  return (
  <>
    <NavBar user={user}/>
    <Switch>
      <Route exact path="/">
        <Home  user={user}/>
      </Route>
      <Route exact path="/cars">
        <Cars cars={cars} user={user}/>
      </Route>
      <Route exact path='/meets'>
        <Meets meets={meets} user={user}/>
      </Route>
    </Switch>
  </>
  )
}

export default App;
