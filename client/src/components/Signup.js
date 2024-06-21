import {useOutletContext} from 'react-router-dom'

const {formik} = useOutletContext()

function Signup(){
    return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.email}></input>
            <p>{formik.errors.email}</p>
            <input onChange={formik.handleChange} value={formik.values.username}></input>
            <p>{formik.errors.username}</p>
            <input onChange={formik.handleChange} value={formik.values.password}></input>
            <p>{formik.errors.password}</p>
            <input onChange={formik.handleChange} value={formik.values.color}></input>
            <p>{formik.errors.color}</p>
        </form>
    </>
    )
}



export default Signup