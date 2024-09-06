import { Link } from "react-router-dom";


function NavBar({user, handleClick}){
    return(
        <div className="navBar">
            <input id="menu button"/>
            <div id="LinkContainer">
                <Link className="nav-link" to="/">Profile</Link>
                <Link className="nav-link" to="/cars">Cars</Link>
                <Link className="nav-link" to="/meets">Meets</Link>
            </div>
            <input id="signoutButton" type="button" onClick={handleClick}/>
        </div>
    );
}

export default NavBar;