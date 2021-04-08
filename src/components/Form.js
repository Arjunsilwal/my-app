import React, {useState} from 'react'
import Header from './Header'

function Form() {
    const [form, updateForm] = useState()
    const handleClick = () => {
        updateForm(alert("Your request has been submitted"))
    }

    return (
        <div>
            <Header />
            <form>
            <label>
                Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </div>
    )
}

export default Form
