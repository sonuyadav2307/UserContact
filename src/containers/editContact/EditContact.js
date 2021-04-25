
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUsers } from "../../redux/actions/users";
import { useSelector } from "react-redux";
import FormBuilder from '../../components/formBuilder/FormBuilder'
import { Wrapper } from "../../components/wrapper/Wrapper.Style";
function EditContact() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(editUsers(id));
  }, []);
  
  const editForm = useSelector((state) => state.users.editForm);
   const onFinish = (values) => {
    console.log("hello world eidt form", values);
   
  };

  const formData = (data) => {
    const arr = [
      {
        type: "text",
        label: "Username",
        name: "username",
        initialValue: data.name,
        placeholder: "Username",
      },
      {
        type: "text",
        label: "Phone",
        name: "phone",
        initialValue: data.phone,
        placeholder: "Phone",
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        initialValue: data.email,
        placeholder: "Email",
      },
    ];
    return arr
  }
console.log('this is edit form ',editForm);

  return (
    <div>
         <Wrapper>
      <FormBuilder formData={formData(editForm)} onFinish={onFinish}/>
      </Wrapper>

    </div>
  );
}

export default EditContact;
