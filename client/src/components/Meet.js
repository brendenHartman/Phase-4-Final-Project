function Meet({meet, handleReserve}){
    return (
        <div  id={meet.id}>
            <h1>{meet.name}</h1>
            <h2>{meet.type}</h2>
            <p>Starts: {meet.start_date}, Ends: {meet.end_date}</p>
            <p>Reserve your spot below!</p>
            <label htmlFor='1'>{meet.tier_1_tickets} spots left</label>
            <input type="button" id='1' value='Reserve Tier 1 Spot' onClick={handleReserve}/>
            <label htmlFor='2'>{meet.tier_2_tickets} spots left</label>
            <input type="button" id='2' value='Reserve Tier 2 Spot' onClick={handleReserve}/>
            <label htmlFor='3'>{meet.tier_3_tickets} spots left</label>
            <input type="button" id='3' value='Reserve Tier 3 Spot' onClick={handleReserve}/>
        </div>
    )
}

export default Meet