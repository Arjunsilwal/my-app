import React, {useState} from 'react'


function Order() {
    const style ={
        width: "100%;",
        border: "15px",
        padding: '50px',
        margin: '20px'
    }
    const [web, updatedWeb] = useState("Hello There!!")
    const handleClick = () => updatedWeb(prompt(web + "The content is still Updating. Thank you!!!!"))
    return (
        <div style={style}>
            <button className="button" onClick={handleClick}>Order Website</button>
        </div>
    )
}

export default Order
