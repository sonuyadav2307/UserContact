import React from "react";
import { Table} from 'antd';


const UserTable = (props) => {
  console.log('this is table',props.user);
  const {user} = props
  let emptyList = []
user.map(user => emptyList.push(
  {
    key: '2',
    name: user.name,
    phone: user.phone,
    address: user.email,
    action:<h3 onClick={() => console.log(user.id)}>hello world</h3>
  },
) )

console.log("this is new list ",emptyList);

  // {
  //   key: '2',
  //   name: 'John',
  //   age: 42,
  //   address: '10 Downing Street',
  // }
 
  const dataSource = emptyList
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  

  return (
    <div>
        <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default UserTable
