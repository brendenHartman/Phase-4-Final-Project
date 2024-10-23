import Car from "./Car"
import Spot from "./Spot"
import CarForm from "./CarForm"

function Home({user, handleRemove, handleLeave, handleColor}){

    return (
    <div id='home_page' key="home_page">
        <div id="topSec" key="topSec">
            <div id="decor"></div>
            <h1 id='userGreeting'>Hello, {user.username}!</h1>
            <h3 id="colorHome" style={{background: user.color}}>Current Theme: {user.color}</h3>
            <label id='colorLabelHome' htmlFor='Red'>Change Color?</label>
            <div id='colorContainer'>
                <input id='Red' style={{background: 'red'}} type='button' onClick={handleColor}/>
                <input id='Orange' style={{background: 'orange'}} type='button' onClick={handleColor}/>
                <input id='Yellow' style={{background: 'yellow'}} type='button' onClick={handleColor}/>
                <input id='Green' style={{background: 'green'}} type='button' onClick={handleColor}/>
                <input id='Blue' style={{background: 'blue'}} type='button' onClick={handleColor}/>
                <input id='Purple' style={{background: 'purple'}} type='button' onClick={handleColor}/>
                <input id='Pink' style={{background: 'pink'}} type='button' onClick={handleColor}/>
                <input id='Gray' style={{background: 'gray'}} type='button' onClick={handleColor}/>
            </div>
        </div>
        <div id="dividerHomeTop"></div>
        <div id="garageSec"> 
            {user.cars.map((car)  => <Car key={car.id} id={car.id} car={car} text='Remove' handleClick={handleRemove}/>)}
        </div>
        <div id="dividerHomeBottom"></div>
        <div id="meetsSec">
            {user.spots.map(spot  => <Spot key={spot.id} id={spot.id} spot={spot} handleClick={handleLeave}/>)}
        </div>
    </div>
    )
}

export default Home