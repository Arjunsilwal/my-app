import React from 'react'
import "../App.css";


import { BrowserRouter as Router, Link } from "react-router-dom";


 export default function Header() {
    return (
                <Router>
            <ul>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "/info">Info</Link>
                </li>
                <li>
                    <Link to= "/contacts">Contact</Link>
                </li>
                <li className="li-about" > 
                    <Link to= "/about">About</Link>
                </li>
                  <h2 className= "Author-name">ARJUN SILWAL</h2>
                
            </ul>
            <h2>"A Code Enthusiast"</h2>
                </Router>
    )
}

