import React from 'react'
import "../App.css";

function Header(props) {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="li-about"><a  href="#about">About</a></li>
                <h2 className= "App-name">{props.name}</h2>
            </ul>
            <h2>"A Code Enthusiast"</h2>
        </div>
    )
}

export default Header
