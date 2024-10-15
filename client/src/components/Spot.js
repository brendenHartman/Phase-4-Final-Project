function Spot({spot, handleClick}){
    return (
        <div id={spot.id}  tier={spot.grade} meet={spot.car_meet_id}>
            <p>car meet # {spot.car_meet_id}</p>
            <p>driver #{spot.driver_id}</p>
            <input type='button' value='Leave Meet' onClick={handleClick}/>
        </div>
    )
}

export default Spot