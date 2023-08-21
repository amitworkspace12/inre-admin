import React, { useState } from 'react'
import HeaderSearch from '../../common/HeaderSearch'
import home from '../../../assets/home.png'
import right from '../../../assets/chevron-right.png'
import { LiaGreaterThanSolid } from 'react-icons/lia'

import { GrFormNext} from 'react-icons/gr'
import vector from '../../../assets/Vector.svg'
import Select from '../../common/Select'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'

const EditBackgroundVerification = ({page, setPage,  subPage, setSubPage}) => {
  const [selected, setSelected] = useState(null)
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectOpenProject, setSelectOpenProject] = useState(false)
  const [selectOpenBuilder, setSelectOpenBuilder] = useState(false)
  const [selectOpenCity, setSelectOpenCity] = useState(false)
  const options = ['Not Requird', 'Required'];
  const optionsDummy = ['Dummy', 'Dummy', 'Dummy', "dummy"];
  const [selectedDummy, setSelectedDummy] = useState(null)

  const [selectedOption, setSelectedOption] = useState(null)

  const navigate = useNavigate()
  
  return (
    <div className='w-full min-h-[100vh] flex bg-[#F7F6F9] items-start'>
    <Sidebar page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>
    <div className="p-3 lg:w-[80%] w-full grid gap-5 box-border pb-20">
       <HeaderSearch />
       <div className="flex justify-between w-full">
      <div className={'flex gap-5 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 w-full'}>
        <p className={'border-b-2 border-[#002550] text-[#002550]  pb-7 cursor-pointer'} >
          Background Verification
        </p>
        <p className={'text-[#002550] pb-7 cursor-pointer'} onClick={()=> navigate('/servicemanagement/pre-booking/virtualsite/client')}>Virtual Site Visit</p>

        
      </div>
    
      </div>

      <div className='flex items-center gap-4 font-publicsans text-[15px] font-[400]'>
        <img src={home} />
        <p>Service Management</p>
        <img src={right} />
        <p>Pre Booking</p>
        <img src={right} />
        <p>Background Verification</p>
        <img src={right} />
        <p>View Details</p>
      </div>

      <div className="grid grid-cols-2 w-[80%] gap-x-20  gap-10 font-opensans">
        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
            
          >
            Full Name
          </label>
          <input
          disabled
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Enter Full Name"
            id="name"
          />
        </div>


        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            City
          </label>
          <Select editing={false} initial={'dummy'} options={optionsDummy} setSelectOpen={setSelectOpenCity} selectOpen={selectOpenCity} selected={selectedDummy} setSelected={setSelectedDummy}/>
        </div>


        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Builder Name
          </label>
          <Select editing={false} initial={'dummy'} options={optionsDummy} setSelectOpen={setSelectOpenBuilder} selectOpen={selectOpenBuilder} selected={selectedDummy} setSelected={setSelectedDummy}/>
        </div>


        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Project Name
          </label>
               
<Select editing={false} initial={'dummy'} options={optionsDummy} setSelectOpen={setSelectOpenProject} selectOpen={selectOpenProject} selected={selectedDummy} setSelected={setSelectedDummy}/>

       
        </div>

        <div className="flex flex-col w-full gap-[6px]">
        <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Notification
          </label>
       
<Select editing={false} initial={'Required'} options={options} setSelectOpen={setSelectOpen} selectOpen={selectOpen} selected={selected} setSelected={setSelected}/>
        </div>


        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Report
          </label>
          <input
          disabled
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Report"
            id="name"
          />

       
        </div>
        </div>

        

        <div className='mt-6 font-opensans text-[#1a1a1a] opacity-80 font-[600]'>
            <p className='font-[800]'>*Disclaimer:</p>
            <p>1. Report will be available to client after 24 hours.</p>
            <p>2. If Report Is Not Available In Next 5 Working Days Then Money Will Return Back To The Client Account.</p>
        </div>

    </div>
    </div>
  )
}

export default EditBackgroundVerification
