import React from 'react'
import Sidebar from '../components/common/Sidebar'
import DashboardItem from '../components/dashboard/DashboardItem'

const Dashboard = ({page, setPage,  subPage, setSubPage}) => {
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9]'>
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
      <DashboardItem/>
      
    </div>
  )
}

export default Dashboard
