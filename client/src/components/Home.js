import Car from "./Car"
import Spot from "./Spot"

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
        <div id="dividerHomeTop" style={{background: user.color}}></div>
        <div id="garageSec"> 
            <h2 id='carTitle' style={{background: user.color}}>Cars You Own Will Appear Here!</h2>
            <div id='carGrid'>
                {user.cars.map((car)  => <Car key={car.id} id={car.id} car={car} text='Remove' handleClick={handleRemove}  color='red'/>)}
            </div>
        </div>
        <div id="dividerHomeBottom" style={{background: user.color}}></div>
        <div id="meetsSec">
            <h2 id='meetTitle' style={{background: user.color}}>Your Reserved Spots Will Appear Here!</h2>
            <div id='meetGrid'>
                {user.spots.map(spot  => <Spot key={spot.id} id={spot.id} spot={spot} handleClick={handleLeave}/>)}
            </div>
        </div>
    </div>
    )
}

export default Home