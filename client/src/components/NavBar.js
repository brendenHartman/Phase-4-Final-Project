import { Link } from "react-router-dom";


function NavBar({user, handleClick, handleDelete}){
    return(
        <div className="navBar" id='navBar' style={{background: user.color}}>
            <div id="LinkContainer">
                <label id='profileLabel' htmlFor="ProfileLink" value='Go-to:'>Go to:</label>
                <Link id='ProfileLink' className="nav-link" to="/">Profile</Link>
                <Link className="nav-link" to="/cars">Cars</Link>
                <Link className="nav-link" to="/meets">Meets</Link>
            </div>
            <label id='orLabel' htmlFor="logoutButton" value='Or'>Or</label>
            <input id="logoutButton" type="button" value='Logout' onClick={handleClick}/>
            <input id='deleteAcountButton' type='button' value='delete account' onClick={handleDelete}/>
        </div>
    );
}

export default NavBar;