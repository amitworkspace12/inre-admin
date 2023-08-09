import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import Pic  from '../../assets/Avatar.png'
import { Avatar } from 'antd'
import TableItem from './TableItem'
import Graph from './Graph'



const DashboardItem = () => {
    

  return (
  <>
    <div className='p-3 w-[80%] grid gap-5 box-border pb-20'>
      <div className='flex w-full bg-white items-center h-[62px] rounded-[6px] px-5 justify-between'>
        <div className='w-[70%] relative'>
        <input type='text' className='w-full p-1 pl-8 outline-none font-opensans font-[400] text-[15px]' placeholder='Search (Ctrl+/)'/>
        <IoIosSearch size={25} color='#4B465C' className='absolute top-[50%] translate-y-[-50%] opacity-80'/>
      </div>

      <div className='flex gap-5 items-center'>
      <div className='relative w-fit cursor-pointer'>
       <IoNotificationsOutline size={25}/>
       <p className='absolute text-[12px] font-publicsans h-[14px] w-[14px] rounded-full bg-[red] text-white grid place-content-center -top-[1px] right-0 leading-[14px]'>4</p>
      </div>

      <div className='relative w-fit cursor-pointer'>
      <Avatar size="large" src={Pic} />
      <div className='h-[13px] w-[13px] rounded-full bg-[#28C76F] absolute bottom-1 right-0 border-[3px] border-white'></div>
      </div>
      </div>
    </div>
<div className='flex flex-col gap-3 h-fit'>
    <p className='text-[18px] font-[500] font-poppins leading-[27px]'>User Details</p>
    <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
            <p className='font-[400] text-[15px] leading-[22px]'>Show</p>
            <select className='h-[38px] w-[100px] px-2 rounded-[4px] outline-none border-[#DBDADE] border-[1px]'>
                <option>
                    10
                </option>
                <option>
                    20
                </option>
                <option>
                    30
                </option>
                <option>
                    40
                </option>
            </select>
            <p className='font-[400] text-[15px] leading-[22px]'>Entries</p>
        </div>
        <div>
            <label>Search : </label>
            <input type='text' placeholder='Placeholder' className='rounded-[6px] border-[#DBDADE] border-[1px] h-[38px] px-2 outline-none'/>
        </div>
    </div>
</div>
    <TableItem/>
    <div className='font-publicsans bg-white p-10 rounded-[6px] grid gap-8'>
        <div>
            <p className='font-[600] text-[22px] text-[#4B465C] font-publicsans'>Balance</p>
            <div className='flex justify-between'>
                <p className='text-[400] text-[15px] text-[#4B465C] opacity-50'>Commercial networks & enterprises</p>

                <select className='bg-[#A8AAAE] bg-opacity-20 p-1 outline-none rounded-[6px] text-[#A8AAAE] text-[15px] cursor-pointer'>
                    <option>06/22/2022 - 06/22/2023</option>
                    <option>06/22/2022 - 06/22/2023</option>
                    <option>06/22/2022 - 06/22/2023</option>
                    <option>06/22/2022 - 06/22/2023</option>
                </select>
            </div>
        </div>
<div className='px-5 overflow-hidden'>
    <Graph/>
    </div>
    </div>
    </div>
    </>
  )
}

export default DashboardItem
