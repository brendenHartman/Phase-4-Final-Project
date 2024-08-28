import Car from "./Car"


function Cars({cars, user, handleClick}){
    return (
        <div  id="cars">
            <h1>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <input name="carsSearch" type="text" id="carsSearch"/>
            {cars.map((car) => <Car key={car.id} id={car.id} car={car} text={'Purchase'} handleClick={handleClick}/>)}
        </div>
    )
}

export default Cars