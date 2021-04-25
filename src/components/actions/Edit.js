import React from 'react'
import {
    EditOutlined,
  } from '@ant-design/icons';
  import {Link} from 'react-router-dom'
const Edit = ({id}) => {
    return (
        <Link to={`/EditContact/${id}`}>
            <EditOutlined onClick={() => console.log('edited')}style={{ fontSize: '30px', color: '#ffab00', paddingRight:'1rem' }}/>
        </Link >
    )
}

export default Edit
