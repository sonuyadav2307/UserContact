import React from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/actions/users";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../components/wrapper/Wrapper.Style";
import FormBuilder from "../../components/formBuilder/FormBuilder";
const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("hello world", values);
    dispatch(
      addUsers({
        id: uuidv4(),
        name: values.username,
        phone: values.phone,
        email: values.email,
      })
    );
    history.goBack();
  };
  const formData = [
    {
      type: "text",
      label: "Username",
      name: "username",
      initialValue: "",
      placeholder: "Username",
    },
    {
      type: "number",
      label: "Phone",
      name: "phone",
      initialValue: "",
      placeholder: "Phone",
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      initialValue: "",
      placeholder: "Email",
    },
  ];

  return (
    <Wrapper>
      <FormBuilder formData={formData} onFinish={onFinish} />
      {/* <Form
        onFinish={onFinish}
        initialValues={initialValueMaker(formData)}
      >
      {formData.map(data => <InputField {...data}/>)}
        <Button type="primary" htmlType="submit" className="submit-btn">
          Submit
        </Button>
      </Form> */}
    </Wrapper>
  );
};

export default AddContact;

//save form
// import { Form, Input, Button} from 'antd';
// import React,{useState} from 'react'
// import {  useDispatch } from "react-redux";
// import {addUsers} from '../../redux/actions/users'
// import { useHistory } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import {Wrapper} from '../../components/wrapper/Wrapper.Style'
// const AddContact = () => {
//   const history = useHistory();
//      const [name, setName] = useState("")
//      const [phone, setPhone] = useState("")
//      const [email, setEmail] = useState("")
//     console.log(name);
//     const dispatch = useDispatch();
//     const onFinish = () => {
//         console.log('hello world',name,phone,email);
//         dispatch(addUsers(
//           {
//             id:uuidv4(),
//             key: '20',
//             name: name,
//             phone: phone,
//             email: email,

//           }
//         ))
//         history.goBack();
//       };
//     return (
//       <Wrapper>
//         <Form onFinish={onFinish} >
//             <Form.Item
//              label="Username"
//              name="Username"
//              value= {name}
//              onChange={(e) => setName(e.target.value)}

//             >
//             <Input />
//             </Form.Item>
//             <Form.Item
//              label="Phone"
//              name="Phone"
//              value= {phone}
//              onChange={(e) => setPhone(e.target.value)}

//             >
//             <Input />
//             </Form.Item>
//             <Form.Item
//              label="Email"
//              name="Email"
//              value= {email}
//              onFinish={onFinish}
//              onChange={(e) => setEmail(e.target.value)}

//             >
//             <Input />
//             <Button type="primary" htmlType="submit" className="submit-btn">
//           Submit
//         </Button>
//             </Form.Item>

//         </Form>

//         </Wrapper>
//     )
// }

// export default AddContact

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
