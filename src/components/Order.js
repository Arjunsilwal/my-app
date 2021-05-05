import React from 'react'
import { Link } from "react-router-dom";

function Order() {
    // const style ={
    //     width: "100%",
    //     border: "15px",
    //     padding: '50px',
    //     margin: '20px'
    // }

    return (
        <div className="jumbotron">
            <button className="btn btn-success">
                <Link to="/form">Order Request</Link>
            </button>
        </div>
    )
}

export default Order
