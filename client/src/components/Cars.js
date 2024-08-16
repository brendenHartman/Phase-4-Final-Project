import Car from "./Car"


function Cars({cars, user}){
    return (
        <div>
            <h1>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <input name="carsSearch" type="text" id="carsSearch"/>
            {cars.map((car) => {<Car car={car}/>})}
        </div>
    )
}

export default Cars