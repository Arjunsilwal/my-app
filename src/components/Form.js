import React, {useState} from 'react'
import Header from './Header'

function Form() {
    const [state, setState] = useState({value:''})

   function handleChange(e){
    setState({value:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Name is submitted: " + state.value)
    }

    const formStyle = {
        form : {
            borderRadius: "5px",
            backgroundColor: "#f2f2f2",
            padding: "20px",
          },
          text:{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          },
          button: {
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }

    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} style={formStyle.form}>
            <label>
                Name:
                <input type="text" style={formStyle.text} value={state.value} onChange={handleChange} />
                </label>
                <input style={formStyle.button} type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form
