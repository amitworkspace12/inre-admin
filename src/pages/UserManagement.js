import React from 'react'
import Sidebar from '../components/common/Sidebar'
import UserManagementItems from '../components/usermanagement/UserManagementItems'

const UserManagement = ({page, setPage,  subPage, setSubPage}) => {
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9] items-start'>
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
      <UserManagementItems/>
    
      
    </div>
  )
}

export default UserManagement
