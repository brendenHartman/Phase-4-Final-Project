import NavBar from "./NavBar"
import MyCars from "./MyCars"
import MyMeets from "./MyMeets"
import { useEffect, useState } from "react";

function Home({user}){

    return (
    <div>
        <div id="topSec">
            <div id="decor"></div>
            <img src="https://www.google.com/imgres?q=default%20user%20icon&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fprofile-default-icon-1024x1023-4u5mrj2v.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F6491%2Fprofile-default&docid=EQ-pSivjYMHyZM&tbnid=CgofebTb0utyQM&vet=12ahUKEwi2nMjCqPiHAxWTg4kEHcSxCuIQM3oECBcQAA..i&w=1024&h=1023&hcb=2&ved=2ahUKEwi2nMjCqPiHAxWTg4kEHcSxCuIQM3oECBcQAA"></img>
            <h3>Hello, {user.username}!</h3>
            <h3 id="color"></h3>
        </div>
        <div id="dividerHome"></div>
        <div id="garageSec"> 
        </div>
        <div id="dividerHome"></div>
        <div id="meetsSec">
        </div>
    </div>
    )
}

export default Home