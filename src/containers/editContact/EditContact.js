import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUsers } from "../../redux/actions/users";
import { useSelector } from "react-redux";
import FormBuilder from '../../components/formBuilder/FormBuilder'
import { Wrapper } from "../../components/wrapper/Wrapper.Style";
import InputField from "../../components/inputField/InputField";

function EditContact() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "id");
  useEffect(() => {
    dispatch(editUsers(id));
  }, []);
  
  const editForm = useSelector((state) => state.users.editForm);
   const onFinish = (values) => {
    console.log("hello world eidt form", values);
   
  };

   const formData = [
      {
        type: "text",
        label: "Username",
        name: "username",
        initialValue: editForm.name,
        placeholder: "Username",
      },
      {
        type: "text",
        label: "Phone",
        name: "phone",
        initialValue: editForm.phone,
        placeholder: "Phone",
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        initialValue: editForm.email,
        placeholder: "Email",
      },
    ];
   
console.log('this is edit form ',editForm);

  return (
    <div>
         <Wrapper>
           {JSON.stringify(editForm)}
           <Form onFinish={data => console.log(data)} >
             
            <div>
            <label htmlFor="username">Username</label>
            <Input name="username" value={editForm.username} />
            </div>
             
            <Input name="phone" value={editForm.phone} />
            <Input name="email" value={editForm.email} />
            <Button>Submit</Button>
           </Form>
      {/* <FormBuilder formData={formData} onFinish={onFinish}/> */}
      </Wrapper>

    </div>
  );
}

export default EditContact;
