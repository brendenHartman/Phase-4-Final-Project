function Meet({meet, handleReserve}){
    return (
        <div  id={meet.id}>
            <h1 className="meetName">{meet.name}</h1>
            <h2 className="meetType">Type: "{meet.type}"</h2>
            <h2 className="reserveNotice">Reserve your spot below!</h2>
            <label className="buttonLabel" htmlFor='1'>Tier 1: {meet.tier_1_tickets} spots left</label>
            <input className='tierButton' type="button" id='1' value='Reserve Tier 1 Spot' onClick={handleReserve}/>
            <label className="buttonLabel" htmlFor='2'>Tier 2: {meet.tier_2_tickets} spots left</label>
            <input className='tierButton' type="button" id='2' value='Reserve Tier 2 Spot' onClick={handleReserve}/>
            <label className="buttonLabel" htmlFor='3'>Tier 3: {meet.tier_3_tickets} spots left</label>
            <input className='tierButton' type="button" id='3' value='Reserve Tier 3 Spot' onClick={handleReserve}/>
        </div>
    )
}

export default Meet