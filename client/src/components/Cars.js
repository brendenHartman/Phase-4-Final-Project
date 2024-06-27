import Car from "./Car"
import NavBar from "./NavBar"

function Cars({cars, handleBuy}){
    return (
        <div>
            <NavBar/>
            <h1>Car MarketPlace</h1>
            {cars.map((car) => {<Car car={car} handleBuy={handleBuy}/>})}
        </div>
    )
}

export default Cars