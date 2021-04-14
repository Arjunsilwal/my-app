import React from 'react'
import "../App.css";
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Order from './Order'
import Statement from './Statement'

function Home() {
    return (
        <body>
            <div>
            <Header />
            <Statement />
            <About />
            <Order />
            <Footer />
        </div>
        </body>
    )
}

export default Home
