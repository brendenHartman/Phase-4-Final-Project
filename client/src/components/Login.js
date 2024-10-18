
function Login({formik, formik2}){

    const onSubmit = formik.handleSubmit;
    const handleChange = formik.handleChange; 
    const values = formik.values;

    const values2  = formik2.values;
    const onSubmit2 = formik2.handleSubmit;
    const handleChange2 = formik2.handleChange; 
    
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
          <p>Already Have An Account? Login Below!</p>
          <form id='loginForm' onSubmit={onSubmit2}>
            <input id="username" onChange={handleChange2} value={values2.username} />
            <p>{formik2.errors.username}</p>
            <input id="password" onChange={handleChange2} value={values2.password} />
            <p>{formik2.errors.password}</p>
            <input id="submit" type="submit" />
          </form>
      </>
    )
}

export default Login