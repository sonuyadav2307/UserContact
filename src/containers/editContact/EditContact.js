import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUsers, getUserById } from "../../redux/actions/users";
import { useSelector } from "react-redux";
import FormBuilder from "../../components/formBuilder/FormBuilder";
import { Wrapper } from "../../components/wrapper/Wrapper.Style";

function EditContact() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  const editForm = useSelector((state) => state.users.editForm);
  const onFinish = (values) => {
    values.id = id;
    dispatch(editUsers(values));
    history.push("/userdata");
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

  console.log("this is edit form ", editForm);

  return (
    <div>
      <Wrapper>
        <FormBuilder formData={formData} onFinish={onFinish} />
      </Wrapper>
    </div>
  );
}

export default EditContact;
