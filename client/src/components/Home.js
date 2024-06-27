import NavBar from "./NavBar"
import MyCars from "./MyCars"
import MyMeets from "./MyMeets"

function Home(){
    <div>
        <NavBar/>
        <div id="topSec">
            <div id="decor"></div>
            <img></img>
            <input></input>
            <h3></h3>
            <h3 id="color"></h3>
        </div>
        <div id="dividerHome"></div>
        <div id="garageSec">
            <MyCars/>
        </div>
        <div id="dividerHome"></div>
        <div id="meetsSec">
            <MyMeets/>
        </div>
    </div>
}

export default Home