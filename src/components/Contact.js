import React, {useState} from 'react'
import Header from './Header'
import  "module";
import Footer from './Footer';


function Contact() {
    const [count, setCount] = useState(0);
    const handleClick  = () => {setCount(count + 1)}
    return (
        <div>
            <Header/>
            <h1>Play with hooks here</h1>
            <button onClick={handleClick}>Click Me</button>
            <h3>You clicked me {count} times</h3>
            <Footer />
        </div>
    )
}

export default Contact
