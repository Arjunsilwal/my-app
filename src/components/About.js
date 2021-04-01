import React from 'react'
import "../App.css";
import Footer from './Footer'
import Header from './Header'

function About() {
    const style = {
        margin: '16px',
        padding:"16px",
        boxShadow:"0 2px 5px #ccc",
        boxSizing:'border-box',
        borderRadius: '5px'
    }
    return (
        <div>
            <Header />
            <div style={style} className="About">
            <p >I am a continuous learner. I spend most of my time by learning
                and doing different coding practices. I have already collected more than 
                10 certification courses. I have gained certificate of python, python in datastructure,
                JavaScript, Java, React, Node etc. I have good problem solving capability as well.
                My problem solving capability is always a topic of praise 
                among my friends. If you want to know more about me, Here is my Linkdin Profile...
                <br />
                <a href="https://www.linkedin.com/in/arjun-silwal-234a76164/">LINKEDIN</a>
            </p>
            </div>
            <Footer />
            </div>
    )
}

export default About
