function CarForm({formikCar}){
    const formik  = formikCar
    const handleSubmit = formikCar.handleSubmit
    const values = formikCar.values
    const handleChange  = formikCar.handleChange

    return (
        <div id="carFormDiv">
            <form id="carForm" onSubmit={handleSubmit}>
                <input className='carFormInput' id='make' onChange={handleChange} value={values.make}/>
                <p>{formik.errors.make}</p>
                <input className='carFormInput' id='model' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.model}</p>
                <select id='type' onChange={handleChange} value={values.type}>
                    <option value='Muscle' label='Muscle'>Muscle</option>
                    <option value='Super' label='Super'>Super</option>
                    <option value='Hyper' label='Hyper'>Hyper</option>
                    <option value='Truck' label='Truck'>Truck</option>
                    <option value='Luxury' label='Luxury'>Luxury</option>
                    <option value='Sport' label='Sport'>Sport</option>
                </select>
                <p>{formik.errors.type}</p>
                <input className='submitCar' id="submit" type="submit" value='Create'/>
            </form>
        </div>
    )
}

export default CarForm