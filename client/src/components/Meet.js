function Meet({meet, handleReserve}){
    return (
        <div  id={meet.id}>
            <h1>{meet.name}</h1>
            <h2>{meet.type}</h2>
            <p>Starts: {meet.start_date}, Ends: {meet.end_date}</p>
            <p>Reserve your spot below!</p>
            <label for='1'>1 spots left</label>
            <input type="button" id='1' value='Reserve Tier 1 Spot' onClick={handleReserve}/>
            <label for='2'>2 spots left</label>
            <input type="button" id='2' value='Reserve Tier 2 Spot' onClick={handleReserve}/>
            <label for='3'>3 spots left</label>
            <input type="button" id='3' value='Reserve Tier 3 Spot' onClick={handleReserve}/>
        </div>
    )
}

export default Meet