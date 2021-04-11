import React, {useState} from 'react'
import Header from './Header'

function Form() {
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
    const [state, setState] = useState({value:''})
    const [content, setContent] = useState({value:''})

    function handleChange(e){
     setState({value:e.target.value})
     }

     function changeContent(e){
        setContent({value:e.target.value})
    }
 
     function handleSubmit(e){
         e.preventDefault();
         alert("Name is submitted: " + state.value + " Your content is: " + content.value)
     }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}
            style={formStyle.form}>
            <label>
                Name:
                <input type="text"
                 style={formStyle.text}
                 value={state.value}
                 placeholder="Name Here"
                  onChange={handleChange} />
                Type Your Order Request Here:
                <textarea type="textarea" rows="10" cols="30"
                placeholder="Content Here"
                value={content.value}
                onChange= {changeContent}
                style={formStyle.text}  />
                </label>
                <input  
                 style={formStyle.button}
                 type="submit" 
                 value="Submit"/>
            </form>
        </div>
    )
}

export default Form
