import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import Pic  from '../../assets/Avatar.png'
import { Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'

const HeaderSearch = () => {
  const navigate = useNavigate()
  return (
    <div className='flex w-full bg-white items-center h-[62px] rounded-[6px] px-5 justify-between'>
    <div className='w-[70%] relative'>
    <input type='text' className='w-full p-1 pl-8 outline-none font-opensans font-[400] text-[15px]' placeholder='Search (Ctrl+/)'/>
    <IoIosSearch size={25} color='#4B465C' className='absolute top-[50%] translate-y-[-50%] opacity-80'/>
  </div>

  <div className='flex gap-5 items-center'>
  <div className='relative w-fit cursor-pointer'>
   <IoNotificationsOutline size={25} onClick={()=> navigate('/notifications')}/>
   <p className='absolute text-[12px] font-publicsans h-[14px] w-[14px] rounded-full bg-[red] text-white grid place-content-center -top-[1px] right-0 leading-[14px]'>4</p>
  </div>

  <div className='relative w-fit cursor-pointer'>
  <Avatar size="large" src={Pic} />
  <div className='h-[13px] w-[13px] rounded-full bg-[#28C76F] absolute bottom-1 right-0 border-[3px] border-white'></div>
  </div>
  </div>
</div>
  )
}

export default HeaderSearch
