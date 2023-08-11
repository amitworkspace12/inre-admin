import React from 'react'
import ServiceManagementItem from '../components/servicemanagement/PrevBooking/PrevBooking'
import Sidebar from '../components/common/Sidebar'

const ServiceManagement = ({page, setPage, subPage, setSubPage}) => {
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9] items-start'>
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setPage}/>
      <ServiceManagementItem/>
    
      
    </div>
  )
}

export default ServiceManagement
