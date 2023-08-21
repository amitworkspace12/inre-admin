import React, { useEffect, useState } from 'react'
import Sidebar from '../common/Sidebar'
import HeaderSearch from '../common/HeaderSearch'
import pencil from '../../assets/pencil.png'
import eye from '../../assets/eye.png'
import trash from '../../assets/trash.png'
import TableItem from '../common/TableItem'
import refresh from '../../assets/refresh.png'
import PersonalDetails from './PersonalDetails'
import DeleteWarning from './DeleteWarning'
import { useNavigate } from 'react-router-dom'



const UserManagementItems = () => {
  const [dataSource, setDataSource] = useState([

    {
      key:1,
      name:'Amit',
      email: "ram@hotmail.com",
      property: "Basti",
      stage: "i'm still Working",
    },
  
    {
      key:2,
      name:'Suraj',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
  
    {
      key:3,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
  
  
    {
      key:100,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
  
    {
      key:4,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
  
    {
      key:5,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:6,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:7,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:8,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:9,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:10,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:11,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:12,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:13,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:14,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:15,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:16,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:17,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:18,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:19,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:20,
      name:'Saurabh',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:21,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:22,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:23,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:24,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:25,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:26,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:27,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:28,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:29,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:30,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:31,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:32,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:33,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:34,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:35,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:36,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:37,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:38,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:39,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:40,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:41,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
      key:42,
      name:'Aohn Brown',
      email: "Herminia47@hotmail.com",
      property: "Villas",
      stage: "i'm still searching",
    },
    {
    key:43,
    name:'Aohn Brown',
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
    }
  
  
  ])
  const [keyData, setKeyData] = useState({})
  const [editActive, setEditActive] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()

  const handleView = (record) => {
    localStorage.setItem('key', record.key)
    setEditActive(true)
  }
  const handleEdit = (record) => {
    localStorage.setItem('key', record.key)
    setEdit(true)
    setEditActive(true)
  }

  const handleDelete = (i) => {
   
    if (i >= 0 && i < dataSource.length) {
        let newArray = dataSource.slice(); // Create a copy of the original array
        newArray.splice(i, 1); // Remove 1 element at the specified index
        setDataSource(newArray); // Update the state with the new array
      }
  };

  useEffect(()=> {
    console.log(keyData)
    
  },[keyData,dataSource ])

  const columns = [
    {
      title: "FULL NAME",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 4,
      },
      render: (text, record) => (
        <span className="custom-column-style font-[600] ">{text}</span>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 3,
      },
    },
    {
      title: "PROPERTY TYPE",
      dataIndex: "property",
      sorter: {
        compare: (a, b) => a.property - b.property,
        multiple: 2,
      },
    },
    {
      title: "STAGE",
      dataIndex: "stage",
      sorter: {
        compare: (a, b) => a.stage - b.stage,
        multiple: 1,
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
        <img src={trash} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>{localStorage.setItem('key',record.key); setIsModalOpen(true)}}/>
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/usermanagement/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/usermanagement/${record.key}`)}/>
        <img src={refresh} className='w-[22px] h-[22px] cursor-pointer'/>
        </div>
      ),
    },
  ];
  return (
    <div className='p-3 w-[80%] grid gap-5 box-border pb-20 items-start'>
      <HeaderSearch/>
     
<div className='flex flex-col gap-3 h-fit'>
    <p className='text-[18px] font-[500] font-poppins leading-[27px]'>User Management</p>
    
</div>
<TableItem data={dataSource} columns={columns} setEditActive={setEditActive}/>

<DeleteWarning handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default UserManagementItems
