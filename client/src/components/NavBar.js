import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="navBar">
            
            <NavLink className="nav-link" to="/">Profile</NavLink>
            <NavLink className="nav-link" to="/myTeam">Cars</NavLink>
            <NavLink className="nav-link" to="/teams">Meets</NavLink>
        </div>
    );
}

export default NavBar;