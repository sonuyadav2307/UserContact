import { Form, Button } from "antd";
import React from "react";
import InputField from "../../components/inputField/InputField";
const AddContact = ({ formData, onFinish }) => {
  console.log(formData);

  const initialValueMaker = (formValues) => {
    const initialValues = {};
    formValues.forEach((data) => {
      initialValues[data.name] = data.initialValue;
    });
    return initialValues;
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 5 },
  };
  return (
    <Form
      {...layout}
      onFinish={onFinish}
      initialValues={initialValueMaker(formData)}
    >
      {formData.map((data, index) => (
        <InputField key={index} {...data} />
      ))}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="submit-btn">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddContact;
