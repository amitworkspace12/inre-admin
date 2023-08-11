import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import Pic  from '../../assets/Avatar.png'
import { Avatar } from 'antd'
import TableItem from '../common/TableItem'
import Graph from './Graph'
import pencil from '../../assets/pencil.png'
import eye from '../../assets/eye.png'
import trash from '../../assets/trash.png'
import HeaderSearch from '../common/HeaderSearch'



  
  const columns = [
    {
      title: "FULL NAME",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 4,
      },
      render: (text, record) => (
        <span className="custom-column-style font-[600]">{text}</span>
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
        {/* <Button onClick={() => handleAction(record)}>Action</Button> */}
        <img src={trash} className='w-[22px] h-[22px] cursor-pointer'/>
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer'/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer'/>
        </div>
      ),
    },
  ];
const DashboardItem = () => {
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
  

    // useEffect(() => {
    //     if (searchQuery.trim() === '') {
    //         setDataSource(data);
    //     } else {
    //       const filteredResults = data.filter((item) =>
    //         Object.values(item).some((value) =>
    //           value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    //         )
    //       );
    //       setDataSource(filteredResults);
    //     }
    //   }, [searchQuery]);


    //   useEffect(() => {
    //     if (searchQuery.trim() === '') {
    //         setDataSource(data);
    //     } else {
    //       const filteredResults = data.filter((item) =>
    //         Object.values(item).some((value) =>
    //           String(value).toLowerCase().includes(searchQuery.toLowerCase())
    //         )
    //       );
    //       setDataSource(filteredResults);
    //       console.log(dataSource.length)
    //       console.log(dataSource)
    //     }
    //   }, [searchQuery]);

  return (
  <>
    <div className='p-3 w-[80%] grid gap-5 box-border pb-20'>
     <HeaderSearch/>
<div className='flex flex-col gap-3 h-fit'>
    <p className='text-[18px] font-[500] font-poppins leading-[27px]'>User Details</p>
    
</div>
    <TableItem data={dataSource} columns={columns}/>
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
