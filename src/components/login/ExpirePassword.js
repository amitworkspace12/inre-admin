import React, { useState } from 'react'
import captcha from '../../assets/logos_recaptcha.png'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const ExpirePassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [verify, setVerify] = useState(false)
   

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }
  return (
    <div className='w-[50%] h-full flex items-center justify-center font-opensans'>
    <div className='grid gap-10 w-[60%]'>
        <div>
        <p className='text-[40px] font-[700] text-[#002550] leading-[54px]'>Set New Password</p>
        <p className='leading-[24px] font-[400]'>Let’s login with your previous account. </p>
        </div>

        <form className='grid gap-6 w-full '>
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-[#002550] text-[14px] font-[400] leading-[20px]'>Enter Mobile Number</label>
                <div className='w-full relative '>
                <input type='text' className='w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 pl-14 placeholder:text-[#1a1a1a] placeholder:font-[300] placeholder:opacity-20 border-opacity-20 ' placeholder='Enter Moblie Number'/>
                <span className='absolute top-[50%] translate-y-[-50%] left-2'>+91 {"  "} |</span>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[#002550] text-[14px] font-[400] leading-[20px]'>Enter Password</label>
                <div className='w-full relative'>
                <input type={showPassword ? 'text' : 'password'}  className='w-full border-[1px] border-[#1A1A1A] border-opacity-20 outline-none  rounded-[8px] h-[44px] px-3 placeholder:text-[#1a1a1a] placeholder:font-[300] placeholder:opacity-20 cursor-pointer' placeholder='Enter password'/>
                {
                    showPassword ? <AiOutlineEye color='#002550' size={25} className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer' onClick={(e)=>handlePassword(e)}/> : <AiOutlineEyeInvisible onClick={(e)=>handlePassword(e)} color='#002550' size={25}className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer'/>
                }
                </div>
          
            </div>

            <div className='flex flex-col gap-1'>
                <label className='text-[#002550] text-[14px] font-[400] leading-[20px]'>Confirm Password</label>
                <div className='w-full relative'>
                <input type={showPassword ? 'text' : 'password'}  className='w-full border-[1px] border-[#1A1A1A] border-opacity-20 outline-none  rounded-[8px] h-[44px] px-3 placeholder:text-[#1a1a1a] placeholder:font-[300] placeholder:opacity-20 cursor-pointer' placeholder='Enter password'/>
                {
                    showPassword ? <AiOutlineEye color='#002550' size={25} className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer' onClick={(e)=>handlePassword(e)}/> : <AiOutlineEyeInvisible onClick={(e)=>handlePassword(e)} color='#002550' size={25}className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer'/>
                }
                </div>
           
            </div>


           
        </form>

        <div>
                <button type='submit' className='bg-[#002550] w-full h-[44px] rounded-[8px] text-white font-inter font-[500]'>Verify</button>
            </div>

            <div className='w-full flex h-[59px] items-center justify-between border-[#1A1A1A] border-opacity-20 border-[1px] rounded-[8px] shadow-sm px-5 -mt-4'>
            <div className='flex gap-3  '>
                <input type='checkbox'/>
                <p className='text-[#344054] font-[500] font-inter'>I'm not a robot</p>
            </div>
            <div>
            <img src={captcha}/>
            </div>
            </div>
    </div>
  </div>
  )
}

export default ExpirePassword
