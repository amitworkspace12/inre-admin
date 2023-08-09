import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashboardItem from '../components/dashboard/DashboardItem'

const Dashboard = () => {
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9]'>
      <Sidebar/>
      <DashboardItem/>
      
    </div>
  )
}

export default Dashboard
