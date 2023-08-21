import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../common/Sidebar";
import HeaderSearch from "../../../common/HeaderSearch";
import { useNavigate } from "react-router-dom";
import right from "../../../../assets/chevron-right.png";
import home from "../../../../assets/home.png";
import Select from "../../../common/Select";
import dateIcon from "../../../../assets/calendar.svg";
import { DatePicker, Space } from 'antd';
import EditModal from "../../../common/EditModal";

const EditKhataTransfer = ({ page, setPage, subPage, setSubPage }) => {
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

  const [report, setReport] = useState(null);
  const [lastTax, setLastTax] = useState(null);
  const [khataApplication, setKhataApplication] = useState(null);
  const [passportPhoto, setPassportPhoto] = useState(null)
  const [saleDeep, setSaleDeed] = useState(null)

  const[isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmitModal = () => {}

  useEffect(()=> {
    setPage(2)
    setSubPage(2)
  },[])

  return (
    <>
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
        <p className='pb-7 text-[#002550] cursor-pointer ' onClick={()=> navigate('/servicemanagement/post-registration/tds')}>TDS</p>

        <p className=' pb-7 text-[#002550] cursor-pointer border-b-2 border-black' >Khata Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer ' onClick={()=>navigate('/servicemanagement/post-registration/bescom-transfer')} >BESCOM Transfer</p>

        <p className='pb-7 text-[#002550] cursor-pointer' onClick={()=>navigate('/servicemanagement/post-registration/properttax-transfer')}>Property Tax Transfer</p>
        
      </div>
        </div>
<div className="flex justify-end">
       

{editing ? (
          <button className="md:w-[132px] md:h-[40px] h-[35px] w-[50%] text-[white] border-[1px] border-[#4B4B4B] rounded-[8px] md:text-[17px] font-publicsans font-[500] outline-none hover:opacity-90 bg-[#002550]" onClick={()=> setIsModalOpen(true)}>
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
              Assigned Field Executive
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-[400] text-[#1a1a1a]"
              placeholder="Executive Name"
              id="name"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="city"
            >
              Confirmation of Receipt
            </label>
            <Select
              editing={editing}
              initial={"Yes"}
              selected={city}
              setSelected={setCity}
              options={dailyOptions}
              setSelectOpen={setIsCity}
              selectOpen={isCity}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Property Details
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Property Details"
              id="name"
            />
          </div>


          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Submission Date
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


          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Final Document Receivement Date
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

          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
             Document Push Client Date
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


          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Document Receive Date
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
{/* {} */}

<div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Final Report Status
            </label>
            <div className="relative">
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent flex justify-between items-center"
              placeholder="Final Report Status"
              id="name"
            />
                
                <button className="bg-[#0ECF21] text-[14px] text-white p-[7px] px-2 font-opensans font-[400] rounded-[4px] absolute top-[50%] translate-y-[-50%] right-2">Done</button>
                </div>
          </div>

<div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Report
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{report?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>

                {
                editing &&
                <div className="relative">
                  <input
                  onChange={(e)=>{setReport(e.target.files[0]); console.log(e.target.files[0])}}
                    type="file"
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>
                }
              </div>
            </div>
          </div>

          
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Last Tax Paid Receipts
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{lastTax?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>

                {
                editing &&
                <div className="relative">
                  <input
                  onChange={(e)=>{setLastTax(e.target.files[0]); console.log(e.target.files[0])}}
                    type="file"
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>
                }
              </div>
            </div>
          </div>


          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Khata Application form
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{khataApplication?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>

                {
                editing &&
                <div className="relative">
                  <input
                  onChange={(e)=>{setKhataApplication(e.target.files[0]); console.log(e.target.files[0])}}
                    type="file"
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>
                }
              </div>
            </div>
          </div>
          

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Passport Size Photos -2
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{passportPhoto?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>

                {
                editing &&
                <div className="relative">
                  <input
                  onChange={(e)=>{setPassportPhoto(e.target.files[0]); console.log(e.target.files[0])}}
                    type="file"
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>
                }
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
             Sale Deed Ownership Proof
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>{saleDeep?.name}</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>

                {
                editing &&
                <div className="relative">
                  <input
                  onChange={(e)=>{setSaleDeed(e.target.files[0]); console.log(e.target.files[0])}}
                    type="file"
                    disabled={editing ? "" : "disabled"}
                    className={`absolute w-[60px] top-[50%] translate-y-[-50%] cursor-pointer opacity-0`}
                  />
                  <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                    Uplaod
                  </button>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 font-opensans text-[#003A5D] opacity-80 font-[600]'>
            <p className='font-[800]'>*Disclaimer:</p>
            <p>1. Report will be available to client after 24 hours.</p>
            <p>2. If Report Is Not Available In Next 5 Working Days Then Money Will Return Back To The Client Account.</p>
        </div>
      
      </div>
    </div>
    <EditModal handleSubmit={handleSubmitModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default EditKhataTransfer;
