import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../common/Sidebar";
import HeaderSearch from "../../../common/HeaderSearch";
import { useNavigate } from "react-router-dom";
import right from "../../../../assets/chevron-right.png";
import home from "../../../../assets/home.png";
import Select from "../../../common/Select";
import dateIcon from "../../../../assets/calendar.svg";
import { DatePicker, Space } from 'antd';

const EditTDS = ({ page, setPage, subPage, setSubPage }) => {
  const navigate = useNavigate();
  const [isCity, setIsCity] = useState(false);
  const [isBuilder, setIsBulider] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isDaliy, setIsDaliy] = useState(false);

  const cityOptions = ["dummy", "dummy", "dummy", "dummy"];
  const buliderOptions = ["dummy", "dummy", "dummy", "dummy"];
  const projectOptions = ["dummy", "dummy", "dummy", "dummy"];
  const dailyOptions = ["Yes", "No"];

  const [city, setCity] = useState(null);
  const [builder, setBuilder] = useState(null);
  const [project, setProject] = useState(null);
  const [daily, setDaily] = useState(null);

  const [editing, setEditing] = useState(false);

  useEffect(()=> {
    setPage(2)
    setSubPage(2)
  },[])

  return (
    <div className="w-full min-h-[100vh] flex bg-[#F7F6F9]">
      <Sidebar
        page={page}
        setPage={setPage}
        subPage={subPage}
        setSubPage={setSubPage}
      />

      <div className="p-5 w-[100%] lg:w-[80%] grid gap-5 box-border pb-20 h-[100%]">
        <HeaderSearch />
        <div className="flex justify-between w-[100%] flex-col gap-5 lg:gap-0 lg:flex-row">
        <div className={`flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit`}>
        <p className=' text-[#002550] pb-7 cursor-pointer'onClick={()=> navigate('/servicemanagement/post-registration/sustained-marketing')} >
        Sustained Marketbility
        </p>
        <p className='pb-7 text-[#002550] cursor-pointer border-b-2 border-black' >TDS</p>

        <p className=' pb-7 text-[#002550] cursor-pointer' onClick={()=> navigate('/servicemanagement/post-registration/khata-transfer')}>Khata Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer ' onClick={()=>navigate('/servicemanagement/post-registration/bescom-transfer')} >BESCOM Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=>navigate('/servicemanagement/post-registration/properttax-transfer')}>Property Tax Transfer</p>
        
      </div>
        </div>
<div className="flex justify-end">
       

{editing ? (
          <button className="md:w-[132px] md:h-[40px] h-[35px] w-[50%] text-[white] border-[1px] border-[#4B4B4B] rounded-[8px] md:text-[17px] font-publicsans font-[500] outline-none hover:opacity-90 bg-[#002550]">
            Save
          </button>
        ):  <div
        className="underline cursor-pointer text-[#003A5D] font-[600] font-opensans text-right"
        onClick={() => setEditing(true)}
      >
        Edit Details
      </div>
    }
        </div>

        <div className="grid md:grid-cols-2 xl:w-[80%] gap-x-20  gap-8 font-sans">
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
              for="city"
            >
              Paid Status
            </label>
            <Select
              editing={editing}
              initial={"Paid"}
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
              for="city"
            >
              Challan Status
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={daily}
              setSelected={setDaily}
              options={dailyOptions}
              setSelectOpen={setIsDaliy}
              selectOpen={isDaliy}
            />
          </div>
         
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Current TDS Amount
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Current TDS Amount"
              id="name"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Total Property Value 
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Total Property Value "
              id="name"
            />
          </div>
          
          

          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Date
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
              Installment 1
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Installment"
              id="name"
            />
          </div>
        </div>

        <div className='mt-6 font-opensans text-[#003A5D] opacity-80 font-[600]'>
            <p className='font-[800]'>*Disclaimer:</p>
            <p>1. Report will be available to client after 24 hours.</p>
            <p>2. If Report Is Not Available In Next 5 Working Days Then Money Will Return Back To The Client Account.</p>
        </div>
      
      </div>
    </div>
  );
};

export default EditTDS;
