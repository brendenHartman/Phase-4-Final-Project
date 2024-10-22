import { Link } from "react-router-dom";


function NavBar({user, handleClick, handleDelete}){
    return(
        <div className="navBar" id='navBar' style={{background: user.color}}>
            <div id="LinkContainer">
                <Link className="nav-link" to="/">Profile</Link>
                <Link className="nav-link" to="/cars">Cars</Link>
                <Link className="nav-link" to="/meets">Meets</Link>
            </div>
            <input id="signoutButton" type="button" value='Signout' onClick={handleClick}/>
            <input id='deleteAcountButton' type='button' value='delete account' onClick={handleDelete}/>
        </div>
    );
}

export default NavBar;