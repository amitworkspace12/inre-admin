import React from 'react'
import logo from '../../assets/logoblue.png'
import calender from '../../assets/calendar.png'
import user from '../../assets/users.png'
import { GrFormNext} from 'react-icons/gr'

const Sidebar = () => {
  return (
    <div className='w-[20%] bg-[white] font-publicsans flex flex-col p-10 gap-10 min-h-[100%] pb-20'>
      <div>
            <img src={logo} alt="logo" />
      </div>

      <div className='-mb-6'>
        <p className='text-[11px] text-[#4B465C] opacity-50'>APPS & PAGES</p>
      </div>

      <div className='flex flex-col text-[15px] font-[400] text-[#4B465C] gap-5'>
        <div className='flex gap-[6px]'>
            <img src={calender} alt='calender'/>
            <p className=''>Dashboard</p>
        </div>

        <div className='flex gap-[6px]'>
            <img src={calender} alt='calender'/>
            <p>User Management</p>
        </div>

        <div className='flex gap-[6px] flex-col'>
            <div className='flex gap-[6px] items-center hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3  cursor-pointer'>
            <img src={user} alt='calender'/>
            <p>Service Management</p>
            <GrFormNext color='#4B465C' size={20}/>
            </div>
            <div className='hover:flex flex-col pl-6 hidden'>
                <p className='hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer'>Pre-Booking</p>
                <p className='hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer'>Pre-Registration</p>
                <p className='hover:bg-[#0025501A] hover:bg-opacity-20 p-2 rounded-[6px] pl-3 cursor-pointer'>Post Registration</p>
            </div>
        </div>

        <div className='flex gap-[6px]'>
            <img src={calender} alt='calender'/>
            <p>Analytics/Reports</p>
        </div>

        <div className='flex gap-[6px]'>
            <img src={calender} alt='calender'/>
            <p>Admin Access</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
