import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import pencil from '../../../../assets/pencil.svg'
import eye from '../../../../assets/eye.svg'

import TableItem from "../../../common/TableItem";




import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import { Tag } from "antd";


const TDS = ({page, setPage,  subPage, setSubPage}) => {
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
       
        render: (text, record) => (
          <span className="custom-column-style font-[600]">{text}</span>
        ),
      },
    {
      title: "CLIENT NAME",
      dataIndex: "clientName",
    
      render: (text, record) => (
        <span className="custom-column-style">{text}</span>
      ),
    },
    {
      title: "CLIENT NUMBER",
      dataIndex: "clientNumber",
     
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
    {
      title: "TDS AMOUNT",
      dataIndex: "tdsAmount",
     
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">₹{text}/-</span>
      ),
    },
 

    {
      title: "PAID STATUS",
      dataIndex: "paidStatus",
      sorter: {
        compare: (a, b) => a.paidStatus - b.paidStatus,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px] cursor-pointer">{text}</span>
      ),
    },

    {
      title: "CHALLAN STATUS",
      dataIndex: "challanStatus",
     
      render: (text, record) => {
        
        return <span className=" font-[400] font-publicsans cursor-pointer text-[15px]">{text}</span>
      },
    },



    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
   
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/post-registration/tds/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/post-registration/tds/${record.key}`)}/>
        </div>
      ),
    },
  ]
//   const [dataSource, setDataSource] = useState([])
let dataSource = []

for(let i = 0; i < 14; i++){
  
    dataSource.push({
        key: i,
        clientId:12345,
        clientName:'Client Name',
        clientNumber:45434,
        tdsAmount:'1200',
        paidStatus:'Paid',
        challanStatus:'Yes'
       
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
        <p className=' text-[#002550] pb-7 cursor-pointer ' onClick={()=> navigate('/servicemanagement/post-registration/sustained-marketing')}>
        Sustained Marketbility
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer border-b-2 border-black' >TDS</p>

        <p className=' pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/post-registration/khata-transfer')}>Khata Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer '  onClick={()=>navigate('/servicemanagement/post-registration/bescom-transfer')}>BESCOM Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/post-registration/properttax-transfer')} >Property Tax Transfer</p>
        
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

export default TDS;
