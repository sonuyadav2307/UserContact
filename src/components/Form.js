import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={name}/>
            </div>
        </form>
    )
}

export default Form
