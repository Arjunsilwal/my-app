import React from 'react'
import "../App.css";
import Footer from './Footer'
import Header from './Header'
import More from './More';
import Order from './Order'
import Statement from './Statement'

function Home() {
    return (
        <body>
            <div>
            <Header />
            <Statement />
            <More />
            <Order />
            <Footer />
        </div>
        </body>
    )
}

export default Home
