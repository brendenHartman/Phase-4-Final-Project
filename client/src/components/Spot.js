function Spot({spot, handleClick}){
    return (
        <div id={spot.id}  tier={spot.grade} meet={spot.car_meet_id}>
            <h1 className="meetTitleSpot">Car Meet:</h1>
            <h1 className="meetNameSpot">"{spot.car_meet.name}"</h1>
            <h3 className="spotTier">Tier: {spot.grade}</h3>
            <input className='leaveButton' type='button' value='Leave Meet' onClick={handleClick}/>
        </div>
    )
}

export default Spot