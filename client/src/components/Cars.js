import Car from "./Car"
import CarForm from "./CarForm"

function Cars({cars, user, handleClick, formikCar}){
    return (
        <div id="cars">
            <h1 id='marketTitle' style={{background: user.color}}>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <h4>Add a new car to the marketplace using the form below!</h4>
            <CarForm formikCar={formikCar}/>
            <div id="dividerCar" style={{background: user.color}}></div>
            <h1 id='marketTitleBottom' style={{background: user.color}}>Cars:</h1>
            <div id='marketGrid'>
                {cars.map((car) => <Car key={car.id} id={car.id} car={car} text={'Purchase'} color='green' handleClick={handleClick}/>)}
            </div>
        </div>
    )
}

export default Cars