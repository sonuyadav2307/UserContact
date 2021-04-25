import React from 'react'
import { Popconfirm, message } from 'antd';
import {
    DeleteOutlined,
  } from '@ant-design/icons';
import {  useDispatch } from "react-redux";
import {deleteUsers} from '../../redux/actions/users'
const DeletePopup = ({id}) => {
    
    const dispatch = useDispatch();
    function confirm(e) {
        console.log(e);
        message.success('User Deleted');
        dispatch(deleteUsers(id))
       
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Cancelled');
      }
    return (
        <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a><DeleteOutlined style={{ fontSize: '30px', color: '#f50057', paddingRight:'2rem' }}/></a>
      </Popconfirm>
    )
}

export default DeletePopup
