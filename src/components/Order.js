import React from 'react'
import { Link } from "react-router-dom";

function Order() {
    const style ={
        width: "100%",
        border: "15px",
        padding: '50px',
        margin: '20px'
    }

    return (
        <div style={style}>
            <button className="button">
                <ul>
                <li><Link to="/form">Order Request</Link></li>
                </ul>
            </button>
        </div>
    )
}

export default Order
