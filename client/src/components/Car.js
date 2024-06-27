function Car({car, handleBuy}){
    return (
        <div>
            <h1>{car.model}</h1>
            <h2>"{car.make}"</h2>
            <h2>Type: {car.type}</h2>
            <img src={car.img}/>
            <input onClick={handleBuy} value="Purchase"/>
        </div>
    )
}

export default Car