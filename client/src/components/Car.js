

function Car({car, handleClick, text}){
    return (
        <div id={car.id}>
            <h1>{car.model}</h1>
            <h2>"{car.make}"</h2>
            <h2>Type: {car.type}</h2>
            <input type='button' value={text}  onClick={handleClick}/>
        </div>
    )
}

export default Car