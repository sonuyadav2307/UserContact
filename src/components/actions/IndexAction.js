import React from 'react'
import DeletePopup from './DeletePopup'
import Edit from './Edit'
import ViewModal from './ViewModal'

const IndexAction = ({user}) => {
    return (
        <div style={{display:'flex'}}>
            <DeletePopup id={user.id}/><Edit /><ViewModal user={user}/>
        </div>
    )
}

export default IndexAction
