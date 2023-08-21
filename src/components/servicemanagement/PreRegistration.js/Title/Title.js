import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import pencil from '../../../../assets/pencil.png'
import eye from '../../../../assets/eye.png'
import trash from '../../../../assets/trash.png'
import TableItem from "../../../common/TableItem";


import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import { Tag } from "antd";


const Title = ({page, setPage,  subPage, setSubPage}) => {
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
      title: "DATE OF RECIEPT",
      dataIndex: "dateOfReciept",
      sorter: {
        compare: (a, b) => a.dateOfReciept - b.dateOfReciept,
        multiple: 3,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
    {
      title: "ASSIGN LAWYER",
      dataIndex: "assignLawyer",
      sorter: {
        compare: (a, b) => a.assignLawyer - b.assignLawyer,
        multiple: 2,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px]">{text}</span>
      ),
    },
 

    {
      title: "SUBMISSION DATE",
      dataIndex: "submissionDate",
      sorter: {
        compare: (a, b) => a.submissionDate - b.submissionDate,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans text-[15px] cursor-pointer underline">{text}</span>
      ),
    },

    {
      title: "FINAL REPORT",
      dataIndex: "finalReport",
      sorter: {
        compare: (a, b) => a.finalReport - b.finalReport,
        multiple: 1,
      },
      render: (text, record) => (
        <span className=" font-[400] font-publicsans underline cursor-pointer text-[15px]">{text}</span>
      ),
    },

    {
        title: "SATUS",
        dataIndex: "status",
        sorter: {
          compare: (a, b) => a.status - b.status,
          multiple: 1,
        },
        render: (text, record) => {
            // <span className=" font-[400] font-publicsans text-[15px] text-center">{text}</span>
            if(text === 'Done'){
                return <div className="font-[600] font-publicsans text-[13px] text-center bg-[#5ED5A8] bg-opacity-20 text-[#5ED5A8] w-[103px] overflow-hidden whitespace-nowrap text-ellipsis h-[24px] flex items-center justify-center rounded-[4px]">{text}</div>
            }

            if(text === 'Not Assigned'){
                return <div className="font-[600] font-publicsans text-[13px] text-center bg-[#FB4949] bg-opacity-20 text-[#FB4949] w-[103px] flex items-center justify-center h-[24px] rounded-[4px]">{text}</div>
            }
            else{
                return <div className="font-[600] font-publicsans text-[13px] text-center bg-[#000000] bg-opacity-10 text-black/50 flex items-center justify-center w-[103px] h-[24px] rounded-[4px]">{text}</div>
            }
        },
      },


    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
   
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-registration/titlediligence/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-registration/titlediligence/${record.key}`)}/>
        </div>
      ),
    },
  ]
//   const [dataSource, setDataSource] = useState([])
let dataSource = []

for(let i = 0; i < 14; i++){
    if(i % 3 === 0)
    dataSource.push({
        key: i,
        client:12345,
        dateOfReciept:'12/12/2000',
        assignLawyer:'Abhay Shetty',
        submissionDate:'15/12/2000',
        finalReport:'View',
        status:'In Progress', 
    })

    else if(i % 2 ===0)
    dataSource.push({
        key: i,
        client:12345,
        dateOfReciept:'12/12/2000',
        assignLawyer:'Abhay Shetty',
        submissionDate:'15/12/2000',
        finalReport:'View',
        status:'Done', 
    })

    else
    dataSource.push({
        key: i,
        client:12345,
        dateOfReciept:'12/12/2000',
        assignLawyer:'Abhay Shetty',
        submissionDate:'15/12/2000',
        finalReport:'View',
        status:'Not Assigned', 
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
        <p className=' text-[#002550] pb-7 cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/hasslefree/spa')}>
          Hassle Free Registration
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/hasslefree/stamptduty')}>Virtual Site Visit</p>

        <p className='border-b-2 border-[#002550] pb-7 text-[#002550] cursor-pointer'>Title Diligence</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/sustained')}>Sustained Marketability</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/predelivery/client')}>Pre Delivery Inspection</p>

        <p className='pb-7 text-[#002550] cursor-pointer' >TDS</p>

        
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

export default Title;
