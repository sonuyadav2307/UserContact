import React from "react";
import FormBuilder from "../components/formBuilder/FormBuilder";
import { Wrapper } from "../components/wrapper/Wrapper.Style";
import { useDispatch } from "react-redux";
import { authenticateUsers } from "../redux/actions/authentication";
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
    const alluser = JSON.parse(localStorage.getItem("All_User"));
    console.log("this is all user", alluser);
    if (alluser !== null) {
      const user = alluser.filter((user) => user.email === values.email);
      if (user.length > 0) {
        if (user[0].password === values.password) {
          dispatch(authenticateUsers(user[0]));
          history.push("/userdata");
        } else {
          message.error("Password does not match");
        }
      } else {
        message.error("User email does not match");
      }
    } else {
      message.success("Please sign up first");
    }
  };
  const formData = [
    {
      type: "email",
      label: "Email",
      name: "email",
      initialValue: "",
      placeholder: "Email",
      rules: [{ required: true, message: "Please enter Email" }],
    },
    {
      type: "password",
      label: "Password",
      name: "password",
      initialValue: "",
      placeholder: "password",
      rules: [
        { required: true, message: "Please enter Password" },
        { min: 8, message: "password' must be at least 8 characters" },
      ],
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
