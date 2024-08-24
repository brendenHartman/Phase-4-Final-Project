function Meet({meet, handleReserve}){
    return (
        <div  id={meet.id}>
            <h1>{meet.name}</h1>
            <h2>{meet.type}</h2>
            <p>Starts: {meet.start_date}, Ends: {meet.end_date}</p>
            <input type="button" value='Reserve Spot' onClick={handleReserve}/>
        </div>
    )
}

export default Meet