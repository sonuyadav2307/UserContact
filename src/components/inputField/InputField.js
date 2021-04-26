import React from "react";
import { DatePicker, Form, Input } from "antd";

const InputField = ({
  type,
  label,
  name,
  placeholder,
  rules,
  disabledDate,
}) => {
  return (
    <>
      <Form.Item label={label} name={name} rules={rules}>
        {type === "password" ? (
          <Input.Password />
        ) : type === "date" ? (
          <DatePicker disabledDate={disabledDate} format="YYYY/MM/DD" />
        ) : (
          <Input type={type} placeholder={placeholder} />
        )}
      </Form.Item>
    </>
  );
};

export default InputField;
