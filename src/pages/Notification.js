import React, { useState } from 'react'
import Sidebar from '../components/common/Sidebar'
import av1 from '../assets/Avatar (2).png'
import av2 from '../assets/Avatar (3).png'
import av3 from '../assets/Avatar (4).png'
import av4 from '../assets/Avatar (5).png'
import left from '../assets/chevron-left.svg'
import right from '../assets/chevron-right.svg'
import HeaderSearch from '../components/common/HeaderSearch'

const Notification = ({page, setPage,  subPage, setSubPage}) => {
    const [notifications, setNotifications] = useState([
        {
            img: av1,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av2,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av3,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av4,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av1,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av2,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av3,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av4,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av1,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av2,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av3,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av4,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av1,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av2,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av3,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        },
        {
            img: av4,
            text:'Lorem ipsum dolor sit amet,',
            time:'3:30 PM',
            date: '25-07-2023'
        }
    ])

    const size = notifications.length
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(notifications.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = notifications.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
      };
  return (
    <div className='w-full min-h-[100vh] flex items-start'>
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
      <div className="p-3 pr-0 lg:w-[80%] w-full grid gap-5 box-border pb-20 bg-[#F7F6F9]">
        <div className='pr-5'>
      <HeaderSearch />
      </div>

      <p className='text-[18px] font-poppins font-[500]'>Notification Management</p>
<div className='bg-[#DBDADE] border-[1px]'></div>
      <div className='flex justify-end gap-8 pr-5'>
<p className= "text-[#3B5D79] text-[12px] font-publicsans font-[400] underline cursor-pointer">Mark all as read</p>
<p className= "text-[#3B5D79] text-[12px] font-publicsans font-[400] underline cursor-pointer" onClick={()=> setNotifications([])}>Delete all</p>

<div>
    <p className='text-[#4B465C] text-[15px] font-publicsans font-[400]'>{startIndex+1}-{endIndex > size ? size : endIndex} of {size}</p>
</div>
<div className='flex gap-5'>
    <button onClick={()=> handlePreviousPage()}><img src={left}/></button>
    <button onClick={()=> handleNextPage()}><img src={right}/></button>
</div>
      </div>

<div className='flex flex-col h-full bg-white mr-5'>
{
    currentItems.map((item, i)=> (
        <div className={`${i===0 ?'border-t-[1px]' : ''} flex flex-col md:flex-row md:justify-between justify-center bg-white min-h-[60px] md:items-center px-4 border-b-[1px] border-[#DBDADE]`}>
            <div className='flex gap-3 items-center'>
            <img src={item.img} className='w-[32px] h-[32px]'/>
            <p className='font-[500] font-montserrat text-[#5B6572]'>{item.text}</p>
</div>
            <div className='flex gap-6 font-publicsans text-[11px] md:text-[13px] font-[400] text-[#4B465C] justify-end'>
                <p>{item.date}</p>
                <p>{item.time}</p> 
            </div>
        </div>
    ))
}
</div>

      </div>
      
    </div>
  )
}

export default Notification
