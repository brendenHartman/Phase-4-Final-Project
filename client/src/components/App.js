import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import Login from './Login'


function App(){
const [cars, setCars] = useState([]);
const [meets, setMeets] = useState([]);
const [user, setUser]  = useState(null);
const [refreshPage, setRefreshPage] = useState(false);

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
    }).then(
      (res) => {
        if (res.status === 200){
          setRefreshPage(!refreshPage)
        }
      }
    )
  },
});

const formik2 = useFormik({
});

/* useEffect(() => {
  fetch('/cars')
  .then((r) => r.json())
  .then((data) => setCars(data))
  fetch('/meets')
  .then((r) => r.json())
  .then((data) => setMeets(data))
  fetch("/check_session").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
},[]) */

function handleBuy(){}



if (!user) return <Login formik={formik}/>

  return (
  <>
  </>
  )
}

export default App;
