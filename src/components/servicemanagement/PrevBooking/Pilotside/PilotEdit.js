import React, { useState } from "react";
import Sidebar from "../../../common/Sidebar";
import HeaderSearch from "../../../common/HeaderSearch";
import { useNavigate } from "react-router-dom";
import right from "../../../../assets/chevron-right.png";
import home from "../../../../assets/home.png";
import Select from "../../../common/Select";

const PilotEdit = ({page, setPage,  subPage, setSubPage}) => {
  const navigate = useNavigate();
  const [isCity, setIsCity] = useState(false);
  const [isBuilder, setIsBulider] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isProperty, setIsProperty] = useState(false);
  const [isTimeSlot, setIsTimeSlot] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  const cityOptions = ["dummy", "dummy", "dummy", "dummy"];
  const buliderOptions = ["dummy", "dummy", "dummy", "dummy"];
  const projectOptions = ["dummy", "dummy", "dummy", "dummy"];
  const propertyOptions = ["dummy", "dummy", "dummy", "dummy"];
  const scheduledOptions = ["dummy", "dummy", "dummy"];
  const timeslotOptions = ["dummy", "dummy", "dummy", "dummy"];

  const [city, setCity] = useState(null);
  const [builder, setBuilder] = useState(null);
  const [project, setProject] = useState(null);
  const [property, setProperty] = useState(null);
  const [timeSlot, setTimeSlot] = useState(null);
  const [scheduled, setScheduled] = useState(null);

  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full min-h-[100vh] flex bg-[#F7F6F9] items-start">
      <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>

      <div className="p-5 w-[100%] lg:w-[80%] grid gap-5 box-border pb-20 h-[100%]">
        <HeaderSearch />
        <div className="flex justify-between w-[100%] flex-col gap-5 lg:gap-0 lg:flex-row">
          <div
            className={`flex gap-5 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[13px] md:text-[15px] font-[400] border-b-2 '} lg:w-[60%]`}
          >
            <p
              className={`pb-7 cursor-pointer`}
              onClick={() => navigate("/servicemanagement/pre-booking")}
            >
              Background Verification
            </p>
            <p className="border-b-2 border-black text-[#002550] pb-7 cursor-pointer">
              Virtual Site Visit
            </p>
          </div>

          <div className="flex text-[12px] font-[600] font-opensans w-fit">
            <button className=" p-2 px-8 bg-white  hover:opacity-80" onClick={() =>
                navigate("/servicemanagement/pre-booking/virtualsite/client")
              }>
              Client Side
            </button>
            <button
              className="bg-[#002550] text-white p-2 px-8  hover:opacity-80"
              
            >
              Pilot Side
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-5 lg:flex-row">
          <div className="flex items-center md:gap-4 font-publicsans text-[10px] md:text-[15px] font-[400]">
            <img src={home} />
            <p>Service Management</p>
            <img src={right} />
            <p>Pre Booking</p>
            <img src={right} />
            <p>Visit Virtual Site</p>
            <img src={right} />
            <p>View Details</p>
          </div>
          {!editing && (
            <div
              className="underline cursor-pointer text-[#003A5D] font-[600] font-opensans"
              onClick={() => setEditing(true)}
            >
              Edit Details
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 xl:w-[80%] gap-x-20  gap-8">
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Full Name
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Enter Name"
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
              for="pilot"
            >
              Pilot ID
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Enter Pilot ID"
              id="pilot"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Scheduled Pilot
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Scheduled Pilot"
              id="name"
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

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Property location
            </label>
            <Select
              editing={editing}
              initial={"Project Name"}
              selected={property}
              setSelected={setProperty}
              options={propertyOptions}
              setSelectOpen={setIsProperty}
              selectOpen={isProperty}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="unit"
            >
              Unit Details
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Unit Details"
              id="unit"
            />
          </div>
          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Time slot
            </label>
            <Select
              editing={editing}
              initial={"time slot"}
              selected={timeSlot}
              setSelected={setTimeSlot}
              options={timeslotOptions}
              setSelectOpen={setIsTimeSlot}
              selectOpen={isTimeSlot}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Time Limit
            </label>
            <input
              disabled={editing ? "" : "disabled"}
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Time limit"
              id="name"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Date
            </label>
            <input
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Enter Date"
              id="name"
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Scheduled
            </label>
            <Select
              editing={editing}
              initial={"Schedule"}
              selected={scheduled}
              setSelected={setScheduled}
              options={scheduledOptions}
              setSelectOpen={setIsScheduled}
              selectOpen={isScheduled}
            />
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <label
              className="font-[400] text-[14px] leading-[20px] text-[#002550]"
              for="name"
            >
              Actual Time of Visit
            </label>
            <input
              type="text"
              className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
              placeholder="Enter Actual time"
              id="name"
            />
          </div>
        </div>
        {editing && (
          <button className="md:w-[205px] md:h-[48px] h-[35px] w-[50%] text-[#4B4B4B] border-[1px] border-[#4B4B4B] rounded-[8px] md:text-[17px] font-publicsans font-[500] outline-none hover:opacity-90">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default PilotEdit;
