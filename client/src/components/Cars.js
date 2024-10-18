import Car from "./Car"
import CarForm from "./CarForm"

function Cars({cars, handleClick, formikCar}){
    return (
        <div  id="cars">
            <h1>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <h4>Add a new car to the marketplace using the form below!</h4>
            <CarForm formikCar={formikCar}/>
            {cars.map((car) => <Car key={car.id} id={car.id} car={car} text={'Purchase'} handleClick={handleClick}/>)}
        </div>
    )
}

export default Cars