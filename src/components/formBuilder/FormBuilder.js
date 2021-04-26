import React, { useEffect } from "react";
import { Form, Button } from "antd";
import InputField from "../../components/inputField/InputField";
const FormBuilder = ({ formData, onFinish }) => {
  console.log(formData);
  const [form] = Form.useForm();
  const initialValueMaker = (formValues) => {
    const initialValues = {};
    formValues.forEach((data) => {
      initialValues[data.name] = data.initialValue;
    });
    return initialValues;
  };
  useEffect(() => {
    const initials = initialValueMaker(formData);
    form.setFieldsValue(initials);
  }, [form, formData]);
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
      form={form}
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

export default FormBuilder;
