
function Login({formik, formik2}){

    const onSubmit = formik.handleSubmit;
    const handleChange = formik.handleChange; 
    const values = formik.values;

    const values2  = formik2.values;
    const onSubmit2 = formik2.handleSubmit;
    const handleChange2 = formik2.handleChange; 
    
    return (
        <div id='loginScreen'>
          <h1 id='loginTitle'>Welcome to Aqua's Car Company</h1>
          <form id="signupForm" onSubmit={onSubmit}>
            <h4 id='signUpTitle'>SignUp Here</h4>
            <input id="email" className='signInput' onChange={handleChange} value={values.email} />
            <p>{formik.errors.email}</p>
            <input id="username" className='signInput' onChange={handleChange} value={values.username} />
            <p>{formik.errors.username}</p>
            <input id="password" className='signInput' onChange={handleChange} value={values.password} />
            <p>{formik.errors.password}</p>
            <select id='color' onChange={handleChange} value={values.color}>
                    <option value='White' label='White'>White</option>
                    <option value='Red' label='Red'>Red</option>
                    <option value='Orange' label='Orange'>Orange</option>
                    <option value='Yellow' label='Yellow'>Yellow</option>
                    <option value='Green' label='Green'>Green</option>
                    <option value='Teal' label='Teal'>Teal</option>
                    <option value='Blue' label='Blue'>Blue</option>
                    <option value='Purple' label='Purple'>Purple</option>
                    <option value='Pink' label='Pink'>Pink</option>
                    <option value='Gray' label='Gray'>Gray</option>
                    <option value='Black' label='Black'>Black</option>
            </select>
            <p>{formik.errors.color}</p>
            <input id="submit" type="submit" />
          </form> 
          <h4 id='loginNotice'>Already Have An Account? Login Below!</h4>
          <form id='loginForm' onSubmit={onSubmit2}>
            <input id="username" className='logInput' onChange={handleChange2} value={values2.username} />
            <p>{formik2.errors.username}</p>
            <input id="password" className='logInput' onChange={handleChange2} value={values2.password} />
            <p>{formik2.errors.password}</p>
            <input id="submit" type="submit" />
          </form>
      </div>
    )
}

export default Login