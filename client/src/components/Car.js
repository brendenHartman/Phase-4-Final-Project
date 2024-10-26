
function Car({car, handleClick, text, color}){
    return (
        <div id={car.id}>
            <h1 className='carModel'>{car.model}</h1>
            <h2 className='carMake'>Brand: {car.make}</h2>
            <h2 className='carType'>Type: {car.type}</h2>
            <input className='removeButton' style={{background: color}} type='button' value={text}  onClick={handleClick}/>
        </div>
    )
}

export default Car