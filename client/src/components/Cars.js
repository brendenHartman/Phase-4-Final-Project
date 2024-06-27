import Car from "./Car"
import NavBar from "./NavBar"

const {cars, handleBuy}  = useOutletContext()

function Cars(){
    return (
        <div>
            <NavBar/>
            <h1>Car MarketPlace</h1>
            <label htmlFor="carsSearch"></label>
            <input name="carsSearch" type="text" id="carsSearch"></input>
            {cars.map((car) => {<Car car={car} handleBuy={handleBuy}/>})}
        </div>
    )
}

export default Cars