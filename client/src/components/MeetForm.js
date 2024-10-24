function MeetForm({formikMeet}){
    const formik  = formikMeet
    const handleSubmit = formikMeet.handleSubmit
    const values = formikMeet.values
    const handleChange  = formikMeet.handleChange

    return (
        <div>
            <form id="meetForm" onSubmit={handleSubmit}>
                <input id='name' onChange={handleChange} value={values.make}/>
                <p>{formik.errors.name}</p>
                <select id='type' onChange={handleChange} value={values.type}>
                    <option value='Muscle' label='Muscle'>Muscle</option>
                    <option value='Super' label='Super'>Super</option>
                    <option value='Hyper' label='Hyper'>Hyper</option>
                    <option value='Truck' label='Truck'>Truck</option>
                    <option value='Luxury' label='Luxury'>Luxury</option>
                    <option value='Sport' label='Sport'>Sport</option>
                </select>
                <p>{formik.errors.type}</p>
                <input id='tier1' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier1}</p>
                <input id='tier2' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier2}</p>
                <input id='tier3' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier3}</p>
                <input id="submit" type="submit" />
            </form>
        </div>
    )
}

export default MeetForm