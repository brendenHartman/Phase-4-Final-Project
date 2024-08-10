import NavBar from './NavBar'

function Login({formik}){

    const onSubmit = formik.handleSubmit
    const handleChange = formik.handleChange; 
    const values = formik.values
    return (
        <>
          <form id="signupForm" onSubmit={onSubmit}>
            <input id="email" onChange={handleChange} value={values.email} />
            <p>{formik.errors.email}</p>
            <input id="username" onChange={handleChange} value={values.username} />
            <p>{formik.errors.username}</p>
            <input id="password" onChange={handleChange} value={values.password} />
            <p>{formik.errors.password}</p>
            <input id="color" onChange={handleChange} value={values.color} />
            <p>{formik.errors.color}</p>
            <input id="submit" type="submit" />
          </form> 
      </>
    )
}


/*<form id="loginForm" onSubmit={onSubmit}>
          <input id="username" type="text" onChange={handleChange} value={values.username} />
          <p>{formik.errors.username}</p>
          <input id="password" type="text" onChange={handleChange} value={values.password} />
          <p>{formik.errors.password}</p>
          <input type="submit" />
        </form>
        <div id="loginDivider"></div>*/
export default Login