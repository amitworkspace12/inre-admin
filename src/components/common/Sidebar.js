import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import calender from '../../assets/calendar.png'
import user from '../../assets/users.png'
import { GrFormNext} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({page, setPage, subPage, setSubPage}) => {
  const [openService, setOpenSevice] = useState(false)
  const naviagate = useNavigate()

  return (
    <div className='hidden lg:flex w-[20%] bg-[white] font-publicsans  flex-col gap-10 min-h-[100vh]'>
      <div className='p-10 py-5'>
            <img src={logo} alt="logo" />
      </div>

      <div className='-mb-6  px-10'>
        <p className='text-[11px] text-[#4B465C] opacity-50'>APPS & PAGES</p>
      </div>

      <div className='flex flex-col text-[15px] font-[400] text-[#4B465C] gap-1 px-8'>
        <div className={`flex gap-[6px] hover:bg-[#0025501A] hover:bg-opacity-20 rounded-[6px] p-2  cursor-pointer ${page=== 0 ? 'bg-[#0025501A] bg-opacity-20' : ''}`} onClick={()=>{setPage(0);setSubPage(-1); naviagate('/dashboard')}}>
            <img src={calender} alt='calender'/>
            <p className=''>Dashboard</p>
        </div>

        <div className={`flex gap-[6px] hover:bg-[#0025501A] hover:bg-opacity-20 rounded-[6px] p-2  cursor-pointer ${page=== 1 ? 'bg-[#0025501A] bg-opacity-20' : ''}`} onClick={()=>{setPage(1);setSubPage(-1); naviagate('/usermanagement')}}>
            <img src={calender} alt='calender'/>
            <p>User Management</p>
        </div>

        <div className='flex gap-[6px] flex-col'>
            <div className={`flex gap-[6px] items-center hover:bg-[#0025501A] hover:bg-opacity-20 rounded-[6px] p-2  cursor-pointer ${page=== 2 ? 'bg-[#0025501A] bg-opacity-20' : ''}`} onClick={()=> {setOpenSevice(prev => !prev); setPage(2)}}>
            <img src={user} alt='calender' />
            <p>Service Management</p>
            <GrFormNext color='#4B465C' size={20} className={`${openService || page==2  ? '-rotate-90': 'rotate-0'} opacity-30`}/>
            </div>
            <div className={`${openService || page==2 ? 'flex' :'hidden'} flex-col`}>
                <p className={`hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer ${subPage=== 0 ? 'bg-[#0025501A] bg-opacity-20' : ''}`} onClick={()=> {setSubPage(0); setPage(2); naviagate('/servicemanagement/pre-booking')}}>Pre-Booking</p>
                <p className={`hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer ${subPage=== 1 ? 'bg-[#0025501A] bg-opacity-20' : ''}`} onClick={()=> {setSubPage(1); setPage(2); naviagate('/servicemanagement/pre-registration/hasslefree/spa')}}>Pre-Registration</p>
                <p className={`hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer ${subPage=== 2 ? 'bg-[#0025501A] bg-opacity-20' : ''}`}
                onClick={()=> {setSubPage(2); setPage(2); naviagate('/servicemanagement/post-registration/sustained-marketing')}}>Post Registration</p>
            </div>
        </div>

        <div className='flex gap-[6px] hover:bg-[#0025501A] hover:bg-opacity-20 rounded-[6px] p-2  cursor-pointer'>
            <img src={calender} alt='calender'/>
            <p>Analytics/Reports</p>
        </div>

        <div className='flex gap-[6px] hover:bg-[#0025501A] hover:bg-opacity-20 rounded-[6px] p-2  cursor-pointer'>
            <img src={calender} alt='calender'/>
            <p>Admin Access</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
