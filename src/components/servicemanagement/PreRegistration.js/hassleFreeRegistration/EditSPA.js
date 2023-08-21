import React, { useState } from "react";
import HeaderSearch from "../../../common/HeaderSearch";
import pencil from '../../../../assets/pencil.png'
import eye from '../../../../assets/eye.png'
import trash from '../../../../assets/trash.png'
import TableItem from "../../../common/TableItem";
import dateIcon from '../../../../assets/calendar.svg'

import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import Select from "../../../common/Select";
import { DatePicker } from "antd";


const EditSPA = ({page, setPage,  subPage, setSubPage}) => {
  const [backgroundVerification, setBackgroundVerification] = useState(true)
  const [backgroundshow, setBackgroundshow] = useState(true)
  const [backgroundedit, setBackgroundedit] = useState(false)
  const [client, setClient] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)

  const [isCity, setIsCity] = useState(false);
  const cityOptions = ["dummy", "dummy", "dummy", "dummy"];
   const [city, setCity] = useState(null);

   const [isBuilder, setIsBulider] = useState(false);
 const buliderOptions = ["dummy", "dummy", "dummy", "dummy"];
  const [builder, setBuilder] = useState(null);
  const [isProject, setIsProject] = useState(false);
const projectOptions = ["dummy", "dummy", "dummy", "dummy"];
 const [project, setProject] = useState(null);


 const [isSpa, setIsSpa] = useState(false)
 const [isAssignedHouse, setIsAssignedHouse] = useState(false)
 const [isClientAcknowledge, setIsClientAcknowledge] = useState(false)
 const [isCourierReceived, setIsCourierReceived] = useState(false)
 const [isAssignedField, setIsAssignedField] = useState(false)

 const [spa, setSpa] = useState()
 const [assigedHouse, setAssignedHouse] = useState()
 const [clientAcknowledge, setClientAcknowledge] = useState()
 const [Courier, setCourier] = useState()
 const [assigedField, setAssigedField] = useState()
 const trueFalseOptions = ["Yes", "No"]

 const [clientSign, setClientSign] = useState(null)
 const [agreement, setAgreement] = useState(null)

  
//   const [dataSource, setDataSource] = useState([])


   

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
    <div className="p-3 lg:w-[80%] w-full grid gap-5 box-border pb-20 bg-[#F7F6F9]">
      <HeaderSearch />
      <div className="flex flex-col gap-10 bg-[#F7F6F9] ">
      <div className={`md:flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit hidden`}>
        <p className='border-b-2 border-[#002550] text-[#002550] pb-7 cursor-pointer' >
          Hassle Free Registration
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer' >Virtual Site Visit</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/titlediligence')}>Title Diligence</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/sustained')}>Sustained Marketability</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/pre-registration/predelivery')}>Pre Delivery Inspection</p>

        <p className='pb-7 text-[#002550] cursor-pointer' >TDS</p>

        
      </div>
    <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
      <div className="flex text-[12px] font-[600] font-opensans">
          <button className={`bg-[#002550] text-white p-2  w-[122px]  hover:opacity-80 h-[38px]`}>SPA</button>
          <button className={`h-[38px] bg-white text-[#002550] w-[122px] p-2 hover:opacity-80`} onClick={()=> navigate('/servicemanagement/pre-registration/hasslefree/stampduty')}>Stamp Duty</button>
        </div>

        {editing ? (
          <button className="md:w-[132px] md:h-[40px] h-[35px] w-[50%] text-[white] border-[1px] border-[#4B4B4B] rounded-[8px] md:text-[17px] font-publicsans font-[500] outline-none hover:opacity-90 bg-[#002550]">
            Save
          </button>
        ):  <div
        className="underline cursor-pointer text-[#003A5D] font-[600] font-opensans md:text-right"
        onClick={() => setEditing(true)}
      >
        Edit Details
      </div>
    }
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:w-[80%] w-full gap-x-20  gap-8 font-sans">
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Client ID
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Client ID"
              id="name"
            />
          </div>
          
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Client Name
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Client Name"
              id="name"
            />
          </div>
          
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="city"
            >
              City
            </label>
            <Select
              editing={editing}
              initial={"City"}
              selected={city}
              setSelected={setCity}
              options={cityOptions}
              setSelectOpen={setIsCity}
              selectOpen={isCity}
            />
          </div>
      
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Plan Registration Time
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Plan Registration Time"
              id="name"
            />
          </div>
        
      



      {/*  */}
      <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Date of Registration
            </label>

            <DatePicker
            format={'DD/MM/YYYY'}
            allowClear={false}
            disabled={editing ? "" : "disabled"}
            placeholder="DD/MM/XXXX"
            suffixIcon={<img src={dateIcon} className="cursor-pointer"/>}
            className="w-full !border-[1px] !border-[#1A1A1A] hover:border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 !border-opacity-20 !bg-transparent dateControl hover:!shadow-none !font-opensans !font-[400] !text-[16px] text-[#1a1a1a]"
            />
            
          </div>

      <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Seller Contact Details
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Seller Contact Details"
              id="name"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Agreement Optional
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{agreement?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e)=> setAgreement(e.target.files[0])}
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>

              </div>
            </div>
          </div>




          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Assigned House in Legal
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={assigedHouse}
              setSelected={setAssignedHouse}
              options={trueFalseOptions}
              setSelectOpen={setIsAssignedHouse}
              selectOpen={isAssignedHouse}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              SPA Status 
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={spa}
              setSelected={setSpa}
              options={projectOptions}
              setSelectOpen={setIsSpa}
              selectOpen={isSpa}
            />
          </div>


          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
             Client Acknowledged 
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={clientAcknowledge}
              setSelected={setClientAcknowledge}
              options={trueFalseOptions}
              setSelectOpen={setIsClientAcknowledge}
              selectOpen={isClientAcknowledge}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Client Sign & Courier
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{clientSign?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>
                <div className="relative">
                  <input
                    type="file"
                    onChange={e=> setClientSign(e.target.files[0])}
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
             Courier Received 
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={Courier}
              setSelected={setCourier}
              options={trueFalseOptions}
              setSelectOpen={setIsCourierReceived}
              selectOpen={isCourierReceived}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Time of Registration
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Time of Registration"
              id="name"
            />
          </div>
          

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
             Assigned Field Executive 
            </label>
            <Select
              editing={editing}
              initial={"Executive Name"}
              selected={assigedField}
              setSelected={setAssigedField}
              options={projectOptions}
              setSelectOpen={setIsAssignedField}
              selectOpen={isAssignedField}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
           Registration Status 
            </label>
            <Select
              editing={editing}
              initial={"Done"}
              selected={project}
              setSelected={setProject}
              options={trueFalseOptions}
              setSelectOpen={setIsProject}
              selectOpen={isProject}
            />
          </div>
      </div>

    </div>
</div>
    
{/* 
<DeleteModal handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> */}
    </>
  );
};

export default EditSPA;
