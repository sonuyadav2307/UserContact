import { Form, Input, Button, Checkbox } from 'antd';
import React,{useState} from 'react'
import {  useDispatch } from "react-redux";
import {addUsers} from '../../redux/actions/users'
const AddContact = () => {
   
     const [name, setName] = useState("")
     const [phone, setPhone] = useState("")
     const [email, setEmail] = useState("")
    console.log(name);
    const dispatch = useDispatch();
    const onFinish = () => {
        console.log('hello world',name,phone,email);
        dispatch(addUsers(
          {
            key: '20',
            name: name,
            phone: phone,
            email: email,
            
          }
        ))
      };
    return (
        <Form onFinish={onFinish} >
            <Form.Item
             label="Username"
             name="username"
             value= {name}
             onChange={(e) => setName(e.target.value)}
             
            >
            <Input />
            </Form.Item>
            <Form.Item
             label="Phone"
             name="phone"
             value= {phone}
             onChange={(e) => setPhone(e.target.value)}
             
            >
            <Input />
            </Form.Item>
            <Form.Item
             label="Email"
             name="email"
             value= {email}
             onFinish={onFinish}
             onChange={(e) => setEmail(e.target.value)}
             
            >
            <Input />
            <Button type="primary" htmlType="submit">
          Submit
        </Button>
            </Form.Item>
        </Form>
    )
}

export default AddContact



// const formData = [
//   {
//     name: "Name",
//     label: "Name",
//     type: "text",
//     initialValue: ""
//   },
//   {
//     name: "Email",
//     label: "Email",
//     type: "email",
//     initialValue: ""
//   }
// ]


// const onSubmit = () => {

// }

// <FormBuilder />
// <inputField />
