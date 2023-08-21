import React, { useRef, useState } from "react";
import Sidebar from "../../../common/Sidebar";
import HeaderSearch from "../../../common/HeaderSearch";
import { useNavigate } from "react-router-dom";
import right from "../../../../assets/chevron-right.png";
import home from "../../../../assets/home.png";
import Select from "../../../common/Select";
import dateIcon from "../../../../assets/calendar.svg";
import { DatePicker, Space } from 'antd';

const EditSustained = ({ page, setPage, subPage, setSubPage }) => {
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
          <div
            className={`flex gap-8 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-fit`}
          >
            <p
              className=" text-[#002550] pb-7 cursor-pointer"
              onClick={() =>
                navigate("/servicemanagement/pre-registration/hasslefree/spa")
              }
            >
              Hassle Free Registration
            </p>
            <p
              className="pb-7 text-[#002550] cursor-pointer"
              onClick={() =>
                navigate(
                  "/servicemanagement/pre-registration/hasslefree/stamptduty"
                )
              }
            >
              Virtual Site Visit
            </p>

            <p
              className=" pb-7 text-[#002550] cursor-pointer"
              onClick={() =>
                navigate("/servicemanagement/pre-registration/titlediligence")
              }
            >
              Title Diligence
            </p>

            <p className="pb-7 text-[#002550] cursor-pointer border-b-2 border-[#002550]">
              Sustained Marketability
            </p>

            <p className="pb-7 text-[#002550] cursor-pointer">
              Pre Delivery Inspection
            </p>

            <p className="pb-7 text-[#002550] cursor-pointer">TDS</p>
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
              for="city"
            >
              Daily Report
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
              Builder Name
            </label>
            <Select
              editing={editing}
              initial={"Bulider Name"}
              selected={builder}
              setSelected={setBuilder}
              options={buliderOptions}
              setSelectOpen={setIsBulider}
              selectOpen={isBuilder}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Project Name
            </label>
            <Select
              editing={editing}
              initial={"Project Name"}
              selected={project}
              setSelected={setProject}
              options={projectOptions}
              setSelectOpen={setIsProject}
              selectOpen={isProject}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px] ">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Date of Request
            </label>

            <DatePicker
            format={'DD/MM/YYYY'}
            allowClear={false}
            disabled={editing ? "" : "disabled"}
            placeholder="DD/MM/XXXX"
            suffixIcon={<img src={dateIcon} className="cursor-pointer"/>}
            className="w-full !border-[1px] !border-[#1A1A1A] hover:border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 !border-opacity-20 !bg-transparent dateControl hover:!shadow-none !font-opensans !font-[400] !text-[16px] text-[#1a1a1a]"
            />
            {/* <div className="relative w-full">
              <input
                ref={ref1}
                disabled={editing ? "" : "disabled"}
                type="date"
                className={`w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent dateControl `}
                placeholder="Unit Details"
                id="unit"
              />
              <img
                src={dateIcon}
                className="absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer"
                onClick={() => ref1.current.showPicker()}
              />
            </div> */}
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="unit"
            >
              Ec Report Date
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
              Next Scheduled date
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
              Report
            </label>
            <div
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent font-opensans flex items-center justify-between"
              placeholder="Enter Actual time"
              id="name"
            >
              <div>report.pdf</div>
              <div className="text-[14px] font-[400] text-white flex gap-3">
                <button className="bg-[#002550] rounded-[4px] p-[7px] px-2">
                  View
                </button>
                <div className="relative">
                  <input
                    type="file"
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
              Unit Details
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Unit details"
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

export default EditSustained;
