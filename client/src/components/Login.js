import {useOutletContext} from 'react-router-dom'
import NavBar from './NavBar'

const {formik, formik2} = useOutletContext()

function Login(){
    return (
    <>
        <NavBar/>
        <form id="loginForm" onSubmit={formik2.handleSubmit}>
            <input></input>
            <p></p>
            <input></input>
            <p></p>
            <input></input>
        </form>
        <div id="loginDivider">

        </div>
        <form id="signupForm" onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.email}></input>
            <p>{formik.errors.email}</p>
            <input onChange={formik.handleChange} value={formik.values.username}></input>
            <p>{formik.errors.username}</p>
            <input onChange={formik.handleChange} value={formik.values.password}></input>
            <p>{formik.errors.password}</p>
            <input onChange={formik.handleChange} value={formik.values.color}></input>
            <p>{formik.errors.color}</p>
            <input id="submit" type="submit">Sign up</input>
        </form>
    </>
    )
}



export default Login