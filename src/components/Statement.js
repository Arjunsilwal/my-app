import React, {useState, useEffect} from 'react'
import "../App.css";
import { useParams } from 'react-router-dom'
import useData from '../services/useData'
//import { Link } from "react-router-dom";

function Statement() {
    //const {id} = useParams()
    const {data:user}= useData();

   console.log(user);
    const [count, setCount] = useState(0);
    const handleClick  = () => {setCount(count + 1)}
    //const {id} = useParams()
    const url= `https://jsonplaceholder.typicode.com/users/`;
    //fetch(url).then(resp => resp.json()).then(data => setdata(data))



    return (
        <div>
            <h2>"A Code Enthusiast"</h2>
            <button onClick={handleClick}>Click Me</button>
            <h3>You clicked me {count} times</h3>
        </div>
    )
}

export default Statement
