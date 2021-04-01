import React from 'react'
import "../App.css";
import Footer from './Footer'
import Header from './Header'

function About() {
    return (
        <div>
            <Header />
            <p className="p" className="About">I am a continuous learner. I spend most of my time by learning
                and doing different coding practices. I have already collected more than 
                10 certification courses. I have gained certificate of python, python in datastructure,
                JavaScript, Java, React, Node etc. I have good problem solving capability as well.
                My problem solving capability is always a topic of praise 
                among my friends. If you want to know more about me, Here is my Linkdin Profile...
                <br />
                <a href="https://www.linkedin.com/in/arjun-silwal-234a76164/">LINKEDIN</a>
                </p>
                <Footer />
            </div>
    )
}

export default About
