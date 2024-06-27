import Car from "./Car"

function MyCars({myCars}){
    return (
        <div>
            <h1>Garage</h1>
            {myCars.map((car) => {<Car car={car}/>})}
        </div>
    )
}

export default MyCars