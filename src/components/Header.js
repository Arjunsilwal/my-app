import React from 'react'
import "../App.css";


import { Link } from "react-router-dom";


 export default function Header() {
    return (
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
    <Link className="nav-link" to= "/">Home</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to= "/info">Info</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to= "/contacts">Contact</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to= "/about">About</Link>
    </li>
  </ul>
</nav>
        
    )
}

