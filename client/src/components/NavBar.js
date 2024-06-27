import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="navBar">
            <input id="menu button"/>
            <div id="LinkContainer">
                <NavLink className="nav-link" to="/">Profile</NavLink>
                <NavLink className="nav-link" to="/myTeam">Cars</NavLink>
                <NavLink className="nav-link" to="/teams">Meets</NavLink>
            </div>
            <img></img>
            <input id="LoginButton">
                <img></img>
            </input>
        </div>
    );
}

export default NavBar;