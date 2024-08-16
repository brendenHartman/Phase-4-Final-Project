import { Link } from "react-router-dom";


function NavBar({user}){
    return(
        <div className="navBar">
            <input id="menu button"/>
            <div id="LinkContainer">
                <Link className="nav-link" to="/">Profile</Link>
                <Link className="nav-link" to="/cars">Cars</Link>
                <Link className="nav-link" to="/meets">Meets</Link>
            </div>
            <img></img>
            <input id="LoginButton"/>
        </div>
    );
}

export default NavBar;