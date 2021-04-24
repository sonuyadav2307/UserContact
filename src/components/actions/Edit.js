import React from 'react'
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
  } from '@ant-design/icons';
const Edit = () => {
    return (
        <div>
            <EditOutlined onClick={() => console.log('edited')}style={{ fontSize: '30px', color: '#ffab00', paddingRight:'1rem' }}/>
        </div>
    )
}

export default Edit
