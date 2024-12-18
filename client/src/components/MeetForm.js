function MeetForm({formikMeet}){
    const formik  = formikMeet
    const handleSubmit = formikMeet.handleSubmit
    const values = formikMeet.values
    const handleChange  = formikMeet.handleChange

    return (
        <div id='meetFormDiv'>
            <form id="meetForm" onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input className='meetFormInput' id='name' onChange={handleChange} value={values.make}/>
                <p>{formik.errors.name}</p>
                <label htmlFor='type'>Type:</label>
                <select id='type' onChange={handleChange} value={values.type}>
                    <option value='Muscle' label='Muscle'>Muscle</option>
                    <option value='Super' label='Super'>Super</option>
                    <option value='Hyper' label='Hyper'>Hyper</option>
                    <option value='Truck' label='Truck'>Truck</option>
                    <option value='Luxury' label='Luxury'>Luxury</option>
                    <option value='Sport' label='Sport'>Sport</option>
                </select>
                <p>{formik.errors.type}</p>
                <label htmlFor='tier1'>Tier 1 Tickets:</label>
                <input className='meetFormInput' id='tier1' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier1}</p>
                <label htmlFor='tier2'>tier 2 Tickets:</label>
                <input className='meetFormInput' id='tier2' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier2}</p>
                <label htmlFor='tier3'>Tier 3 Tickets:</label>
                <input className='meetFormInput' id='tier3' onChange={handleChange} value={values.model}/>
                <p>{formik.errors.tier3}</p>
                <input value='Create' id="submit" type="submit" />
            </form>
        </div>
    )
}

export default MeetForm