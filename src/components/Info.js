import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Info() {

    const info ={
        firstName : "Arjun", lastName : "Silwal", age : 25, role : "Developer",
        placeHolder : " Request for more Info", country : "Australia", city : "Sydney"
    }
    
    const inputBox = <input placeholder = {info.placeHolder}
    />
    
    const getFullName = ()=> {
        return `${info.firstName} ${info.lastName}`
    }
    const getAddress = ()=>{
        return `${info.city},${info.country}`
    }
    const more=()=>{
        return `A continuous learner who always spends time by studying different programming language`
    }
    return (
        <div>
            <Header />
            <h2>Full Name: {getFullName()}</h2>
            <h3>Location:{getAddress()}</h3>
            <p>{more()}</p>
            <p>Age: {info.age}</p>
            <p>Role: {info.role}</p>
            {inputBox}
        </div>
    )
}

export default Info
