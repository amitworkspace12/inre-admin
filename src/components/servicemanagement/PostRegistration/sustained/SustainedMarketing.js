import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import pencil from '../../../../assets/pencil.svg'
import eye from '../../../../assets/eye.svg'

import TableItem from "../../../common/TableItem";




import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import { Tag } from "antd";


const SustainedMarketing = ({page, setPage,  subPage, setSubPage}) => {
  const [backgroundVerification, setBackgroundVerification] = useState(true)
  const [backgroundshow, setBackgroundshow] = useState(true)
  const [backgroundedit, setBackgroundedit] = useState(false)
  const [client, setClient] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

 
  const Clientcolumns = [
    {
        title: "CLIENT ID",
        dataIndex: "clientId",
        sorter: {
          compare: (a, b) => a.clientId - b.clientId,
          multiple: 4,
        },
        render: (text, record) => (
          <span className="custom-column-style font-[600]">{text}</span>
        ),
      },
    {
      title: "PROJECT NAME",
      dataIndex: "project",
      sorter: {
        compare: (a, b) => a.client - b.client,
        multiple: 4,
      },
      render: (text, record) => (
        <span className="custom-column-style">{text}</span>
      ),
    },
    {
      title: "BUILDER NAME",
      dataIndex: "builderName",
      sorter: {
        compare: (a, b) => a.builderName - b.builderName,
        multiple: 3,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
    {
      title: "CITY NAME",
      dataIndex: "cityName",
      sorter: {
        compare: (a, b) => a.cityName - b.cityName,
        multiple: 2,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
 

    {
      title: "DATE OF REQUEST",
      dataIndex: "dateOfRequest",
      sorter: {
        compare: (a, b) => a.dateOfRequest - b.dateOfRequest,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px] cursor-pointer">{text}</span>
      ),
    },

    {
      title: "REPORT",
      dataIndex: "report",
      sorter: {
        compare: (a, b) => a.report - b.report,
        multiple: 1,
      },
      render: (text, record) => {
        if(text === ''){
            return <span className=" font-[400] font-publicsans text-[15px] text-black/40">Not Available </span>
        }
        return <span className=" font-[400] font-publicsans underline cursor-pointer text-[15px]">{text}</span>
      },
    },



    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
   
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-registration/sustained/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/post-registration/sustained-marketing/${record.key}`)}/>
        </div>
      ),
    },
  ]
//   const [dataSource, setDataSource] = useState([])
let dataSource = []

for(let i = 0; i < 14; i++){
    if(i  === 2)
    dataSource.push({
        key: i,
        clientId:12345,
        project:'Project Name',
        dateOfRequest:'12/12/2000',
        builderName:'Abhay Shetty',
        report:'',
        cityName:'Bangalore'
       
    })

    else
    dataSource.push({
        key:i,
        clientId:12345,
        project:'Project Name',
        dateOfRequest:'12/12/2000',
        builderName:'Abhay Shetty',
        report:'View',
        cityName:'Bangalore'
    })

    
}

   

    const handleDelete = (i) => {
   
    //   if (i >= 0 && i < dataSource.length) {
    //       let newArray = dataSource.slice(); // Create a copy of the original array
    //       newArray.splice(i, 1); // Remove 1 element at the specified index
    //       setDataSource(newArray); // Update the state with the new array
    //     }
    };
  return (
    <>
       <div className="w-full min-h-[100vh] flex items-start">
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
    <div className="p-3 w-[80%] grid gap-5 box-border pb-20 bg-[#F7F6F9]">
      <HeaderSearch />
      <div className="flex flex-col gap-10">
      <div className={`flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit`}>
        <p className=' text-[#002550] pb-7 cursor-pointer border-b-2 border-black' >
        Sustained Marketbility
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/post-registration/tds')}>TDS</p>

        <p className=' pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/post-registration/khata-transfer')}>Khata Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer ' onClick={()=>navigate('/servicemanagement/post-registration/bescom-transfer')} >BESCOM Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=>navigate('/servicemanagement/post-registration/properttax-transfer')}>Property Tax Transfer</p>
        
      </div>
    
      

      </div>

      <div className="mt-1">
        
         <TableItem data={dataSource} columns={Clientcolumns}/> 
          
          
      
        
       
      </div>

    </div>
</div>
    
{/* 
<DeleteModal handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> */}
    </>
  );
};

export default SustainedMarketing;
