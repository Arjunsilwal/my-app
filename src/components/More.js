import React from 'react'
import "../App.css";


export default function More() {
    const styleDiv = {
        width: "100%",
        padding: "10px",
        border: "5px solid gray",
        margin: "0",
}
    return (
        <div>
            <div  style={{width:"100%"}}>
            <img src="/images/img.png" alt="Arjun" style={{width:"350", height:"263" }} />
            </div>
            <div style={{width:"100%", styleDiv }}>
               I am a continuous learner. I spend most of my time by learning
                and doing different coding practices. I have already collected more than 
                10 certification courses. I have gained certificate of python, python in datastructure,
                JavaScript, Java, React, Node etc. I have good problem solving capability as well.
                My problem solving capability is always a topic of praise 
                among my friends. If you want to know more about me, Here is my Linkdin Profile...
                <br />
                <a href="https://www.linkedin.com/in/arjun-silwal-234a76164/">LINKEDIN</a>
            </div>
            </div>
    )
}
