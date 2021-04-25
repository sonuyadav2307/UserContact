import React from 'react'
import { Form, Input} from 'antd';

const InputField = ({type,label,name,placeholder, help}) => {
    
    return (
        <>
             <Form.Item
             label= {label}
             name={name}
             value= {name}
           
             
            >
            { type === "password" ? <Input.Password/>: <Input type = {type} placeholder={placeholder}/>}
            </Form.Item>
        </>
    )
}

export default InputField
