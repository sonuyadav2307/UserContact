import React from "react";
import FormBuilder from "../components/formBuilder/FormBuilder";
import { Wrapper } from "../components/wrapper/Wrapper.Style";
import { useDispatch } from "react-redux";
import {authenticateUsers} from '../redux/actions/authentication'
import { useHistory } from "react-router-dom";
import {message} from 'antd'
const SignUp = () => {
 const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    values.nextWishDate = values.birthdate
    console.log("sign up values", values);

    let allUser = localStorage.getItem('All_User')
    if (allUser === null){
      allUser = [values]
      
      
    }else{
      allUser = JSON.parse(allUser)
      const existingUser = allUser.filter((data) => data.username === values.username)
      if (existingUser.length === 0){
        allUser.push(values)
       
      }
      else{
        message.error("User Already Exists")
        return
      }

    }
    let values_serialized = JSON.stringify(allUser)
    localStorage.setItem('All_User',values_serialized)
    dispatch(authenticateUsers(values))
    history.push('/userdata')
  
 
    
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
      type: "password",
      label: "Password",
      name: "password",
      initialValue: "",
      placeholder: "password",
    },
    {
      type: "date",
      label: "Birthdate",
      name: "birthdate",
      initialValue: "",
      placeholder: "Birthdate",
    },
  ];

  return (
    <div>
      <Wrapper>
        <FormBuilder formData={formData} onFinish={onFinish} />
      </Wrapper>
    </div>
  );
};

export default SignUp;
