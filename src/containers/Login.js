import React from "react";
import FormBuilder from "../components/formBuilder/FormBuilder";
import { Wrapper } from "../components/wrapper/Wrapper.Style";
import { useDispatch } from "react-redux";
import {authenticateUsers} from '../redux/actions/authentication'
import { useHistory } from "react-router-dom";
import { message } from "antd";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    console.log("hello world login", values);
    // dispatch(addUsers(
    //   {
    //     id:uuidv4(),
    //     username: values.username,
    //     password: values.password,
    //     birthdate: values.birthdate,

    //   }
    // ))
    // history.goBack();
    const alluser = JSON.parse(localStorage.getItem('All_User'));
    console.log('this is all user', alluser);
    const user =  alluser.filter(user => user.username === values.username)
    if(user.length > 0){
      if(user[0].password === values.password){
        dispatch(authenticateUsers())
        history.push('/userdata')
      }else{
        message.error('Password does not match')
      }
    }else{
      message.error('User email does not match')
    }
  };
  const formData = [
    {
      type: "email",
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
  ];
  return (
    <div>
      <Wrapper>
        <FormBuilder formData={formData} onFinish={onFinish} />
      </Wrapper>
    </div>
  );
};

export default Login;
