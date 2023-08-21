import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import eye from '../../../../assets/eye.svg'
import TableItem from "../../../common/TableItem";


import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";


const EngineerSide = ({page, setPage,  subPage, setSubPage}) => {
  
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
      title: "Engineer Id",
      dataIndex: "engineerId",
   
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
    {
      title: "city name",
      dataIndex: "cityName",
     
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
 

    {
      title: "DATE OF visit",
      dataIndex: "DateOfVisit",
     
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },

    {
      title: "time of visit",
      dataIndex: "timeOfVisit",
      render: (text, record) => (
        <span className=" font-[400] font-publicsans cursor-pointer text-[15px]">{text}</span>
      ),
    },
  
   


    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
   
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-registration/predelivery/engineer/${record.key}`)}/>
        </div>
      ),
    },
  ]
//   const [dataSource, setDataSource] = useState([])
let dataSource = []

for(let i = 0; i < 20; i++){


    dataSource.push({
        key: i,
        clientId:12345,
        timeOfVisit:'12:20PM',
        cityName:'City Name',
        engineerId:22342,
        DateOfVisit:'12/12/2022',
       
          
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
       <div className="w-full min-h-[100vh] flex items-start ">
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
    <div className="p-3 w-[80%] grid gap-5 box-border pb-20 bg-[#F7F6F9]">
      <HeaderSearch />
      <div className="flex flex-col gap-10">
      <div className={`flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit`}>
        <p className=' text-[#002550] pb-7 cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/hasslefree/spa')}>
          Hassle Free Registration
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer'>Virtual Site Visit</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/titlediligence')}>Title Diligence</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/sustained')}>Sustained Marketability</p>

        <p className='pb-7 text-[#002550] cursor-pointer border-b-2 border-[#002550]' >Pre Delivery Inspection</p>

        <p className='pb-7 text-[#002550] cursor-pointer' >TDS</p>

        
      </div>
    
      <div className="flex text-[12px] font-[600] font-opensans">
          <button className={` bg-white text-[#002550] p-2  w-[122px]  hover:opacity-80 h-[38px]`} onClick={()=> navigate('/servicemanagement/pre-registration/predelivery/client')}>Client Side</button>
          <button className={`h-[38px] bg-[#002550] text-white w-[122px] p-2 hover:opacity-80`} >Engineer Side</button>
        </div>

      </div>

      <div className="mt-5">
        
         <TableItem data={dataSource} columns={Clientcolumns}/> 
          
          
      
        
       
      </div>

    </div>
</div>
    
{/* 
<DeleteModal handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> */}
    </>
  );
};

export default EngineerSide;
