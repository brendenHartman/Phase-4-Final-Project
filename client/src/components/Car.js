

function Car({car}){
    return (
        <div id={car.id}>
            <h1>{car.model}</h1>
            <h2>"{car.make}"</h2>
            <h2>Type: {car.type}</h2>
            <input type='button' value="Purchase"/>
        </div>
    )
}

export default Car