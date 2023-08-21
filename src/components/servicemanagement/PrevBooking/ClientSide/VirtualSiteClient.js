import React from 'react'
import HeaderSearch from '../../../common/HeaderSearch'
import { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import pencil from '../../../../assets/pencil.png'
import eye from '../../../../assets/eye.png'
import trash from '../../../../assets/trash.png'
import TableItem from '../../../common/TableItem';
import { useNavigate } from 'react-router-dom'
import DeleteModal from './DeleteModal'

const VirtualSiteClient = ({setPage, page, subPage, setSubPage}) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [clientData, setClientData] = useState([
        {
          key: 0, 
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 1,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 2,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 3,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 4,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 5,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 6,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 7,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 8,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 9,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 10,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 11,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 12,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 13,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 14,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 15,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 16,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 17,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 18,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 19,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 20,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 21,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 22,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 23,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 24,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 25,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 26,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 27,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 28,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 29,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 30,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 31,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 32,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 33,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 34,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 35,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 36,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 37,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 38,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 39,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 40,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 41,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 42,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 43,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 44,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 45,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 46,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 47,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 48,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        },
        {
          key: 49,
          client: '123456',
          city: 'Bangalore',
          builder: 'Arnit Singh',
          project: 'Project Name',
          drone: 'Pilot Name',
          datevisit: '12-12-2023',
          timevisit: '13:00 PM'
        }
      ])
  
    

      const Clientcolumns = [
        {
          title: "CLIENT ID",
          dataIndex: "client",
          sorter: {
            compare: (a, b) => a.client - b.client,
            multiple: 4,
          },
          render: (text, record) => (
            <span className="custom-column-style font-[600]">{text}</span>
          ),
        },
        {
          title: "CITY NAME",
          dataIndex: "city",
          sorter: {
            compare: (a, b) => a.city - b.city,
            multiple: 3,
          },
        },
        {
          title: "BUILDER NAME",
          dataIndex: "builder",
          sorter: {
            compare: (a, b) => a.builder - b.builder,
            multiple: 2,
          },
        },
        {
          title: "PROJECT NAME",
          dataIndex: "project",
          sorter: {
            compare: (a, b) => a.project - b.project,
            multiple: 1,
          },
        },
    
        {
          title: "DRONE PILOT",
          dataIndex: "drone",
          sorter: true
        },
    
        {
          title: "DATE OF VISIT",
          dataIndex: "datevisit",
          sorter: {
            compare: (a, b) => a.datevisit - b.datevisit,
            multiple: 1,
          },
        },
    
        {
          title: "TIME OF VISIT",
          dataIndex: "timevisit",
          sorter: {
            compare: (a, b) => a.timevisit - b.timevisit,
            multiple: 1,
          },
        },
        {
          title: "Actions",
          dataIndex: "actions",
          key: "actions",
          render: (text, record) => (
              <div className="flex gap-4">
            <img src={trash} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> setIsModalOpen(true)}/>
            <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/servicemanagement/pre-booking/virtualsite/client/${record.key}`)}/>
            <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/servicemanagement/pre-booking/virtualsite/client/${record.key}`)}/>
            </div>
          ),
        },
      ]

      const handleDelete = () => {}
    
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9] items-start'>
    <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setPage}/>
    <div className="p-3 lg:w-[80%] w-full grid gap-5 box-border pb-20">
      <HeaderSearch />
      <div className="flex justify-between w-full">
      <div className={`flex gap-5 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 lg:w-[60%]`}>
        <p className={`pb-7 cursor-pointer`} onClick={()=> navigate('/servicemanagement/pre-booking')}>
          Background Verification
        </p>
        <p className= 'border-b-2 border-black text-[#002550] pb-7 cursor-pointer' >Virtual Site Visit</p>

        
      </div>
 
      <div className="flex text-[12px] font-[600] font-opensans w-fit">
          <button className='bg-[#002550] text-white p-2 px-8  hover:opacity-80'>Client Side</button>
          <button className='bg-white p-2 px-8  hover:opacity-80' onClick={()=> navigate('/servicemanagement/pre-booking/virtualsite/Pilot')}>Pilot Side</button>
        </div>

      </div>

      <div className="mt-5">
        
          
             <TableItem data={clientData} columns={Clientcolumns}/> : 
         
          
      
        
       
      </div>

    </div>
    <DeleteModal handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default VirtualSiteClient
