import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import pencil from '../../../../assets/pencil.png'
import eye from '../../../../assets/eye.png'
import trash from '../../../../assets/trash.png'
import TableItem from "../../../common/TableItem";


import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";


const SPA = ({page, setPage,  subPage, setSubPage}) => {
  const [backgroundVerification, setBackgroundVerification] = useState(true)
  const [backgroundshow, setBackgroundshow] = useState(true)
  const [backgroundedit, setBackgroundedit] = useState(false)
  const [client, setClient] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

 
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
      title: "CLIENT NAME",
      dataIndex: "client_name",
      sorter: {
        compare: (a, b) => a.client_name - b.client_name,
        multiple: 3,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
    {
      title: "CLIENT NUMBER",
      dataIndex: "client_number",
      sorter: {
        compare: (a, b) => a.client_number - b.client_number,
        multiple: 2,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
 

    {
      title: "DATE OF REGISTRATION",
      dataIndex: "datereg",
      sorter: {
        compare: (a, b) => a.datereg - b.datereg,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },

    {
      title: "AGREEMENT DOCUMENT",
      dataIndex: "agreement",
      sorter: {
        compare: (a, b) => a.agreement - b.agreement,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans underline cursor-pointer text-[15px]">{text}</span>
      ),
    },

    {
        title: "POWER OF ATTORNEY",
        dataIndex: "power",
        sorter: {
          compare: (a, b) => a.power - b.power,
          multiple: 1,
        },
        render: (text, record) => (
            <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
          ),
      },

      {
        title: "SPA DOCUMENT",
        dataIndex: "spadocument",
        sorter: {
          compare: (a, b) => a.spadocument - b.spadocument,
          multiple: 1,
        },
        render: (text, record) => (
            <span className=" font-[400] font-publicsans underline cursor-pointer text-[15px]">{text}</span>
          ),
      },

      {
        title: "SPA STATUS",
        dataIndex: "spastatus",
        sorter: {
          compare: (a, b) => a.spastatus - b.spastatus,
          multiple: 1,
        },
        render: (text, record) => (
            <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
          ),
      },


    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
   
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/servicemanagement/pre-registration/hasslefree/spa/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate(`/servicemanagement/pre-registration/hasslefree/spa/${record.key}`)}/>
        </div>
      ),
    },
  ]
//   const [dataSource, setDataSource] = useState([])
let dataSource = []

for(let i = 0; i < 20; i++){
    dataSource.push({
        key: i,
        client:12345,
        client_name:'John Smith',
        client_number:'+91 96199 47596',
        datereg:'12/12/2022',
        agreement:'View',
        spadocument:'View',
        spastatus:'Yes',
        power: 'lorem ipsum'   
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
    <div className="p-3 lg:w-[80%] grid gap-5 box-border pb-20 bg-[#F7F6F9]">
      <HeaderSearch />
      <div className="flex flex-col gap-10">
      <div className={`flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit`}>
        <p className='border-b-2 border-[#002550] text-[#002550] pb-7 cursor-pointer' >
          Hassle Free Registration
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer' >Virtual Site Visit</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/titlediligence')}>Title Diligence</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/sustained')}>Sustained Marketability</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/predelivery/client')}>Pre Delivery Inspection</p>

        <p className='pb-7 text-[#002550] cursor-pointer' >TDS</p>

        
      </div>
    
      <div className="flex text-[12px] font-[600] font-opensans">
          <button className={`bg-[#002550] text-white p-2  w-[122px]  hover:opacity-80 h-[38px]`}>SPA</button>
          <button className={`h-[38px] bg-white text-[#002550] w-[122px] p-2 hover:opacity-80`} onClick={()=> navigate('/servicemanagement/pre-registration/hasslefree/stampduty')}>Stamp Duty</button>
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

export default SPA;
