import React from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { todayShort, wishDateMaker } from "../helpers/dateHelpers";
import FormBuilder from "../components/formBuilder/FormBuilder";
import { Wrapper } from "../components/wrapper/Wrapper.Style";
import { authenticateUsers } from "../redux/actions/authentication";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    values.nextWishDate = wishDateMaker(values.birthdate._d);

    let allUser = localStorage.getItem("All_User");
    if (allUser === null) {
      allUser = [values];
    } else {
      allUser = JSON.parse(allUser);
      const existingUser = allUser.filter(
        (data) => data.email === values.email
      );
      if (existingUser.length === 0) {
        allUser.push(values);
      } else {
        message.error("User Already Exists");
        return;
      }
    }
    let values_serialized = JSON.stringify(allUser);
    localStorage.setItem("All_User", values_serialized);
    dispatch(authenticateUsers(values));
    history.push("/userdata");
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
    {
      type: "date",
      label: "Birthdate",
      name: "birthdate",
      initialValue: "",
      placeholder: "Birthdate",
      disabledDate: (d) => !d || d.isAfter(todayShort),
      rules: [{ required: true, message: "Please enter your Birth Date" }],
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
