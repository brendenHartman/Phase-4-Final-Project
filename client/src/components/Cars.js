import Car from "./Car"


function Cars({cars, user}){
    return (
        <div  id="cars">
            <h1>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <input name="carsSearch" type="text" id="carsSearch"/>
            {cars.map((car) => <Car id={car.id} car={car}/>)}
        </div>
    )
}

export default Cars