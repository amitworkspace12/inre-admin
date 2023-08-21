import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import eye from '../../assets/eye-slash.png'
import captcha from '../../assets/logos_recaptcha.png'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [verify, setVerify] = useState(false)
    const naviagate = useNavigate()
   

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }
  return (
    <div className='w-full h-screen flex'>
      <div className='md:w-[50%] w-full h-full flex items-center justify-center font-opensans'>
        <div className='grid gap-10 xl:w-[60%] md:w-[80%] w-[90%] lg:w-[70%] '>
            <div>
            <p className='md:text-[40px] text-[26px] font-[700] text-[#002550] leading-[54px]'>Login</p>
            <p className='leading-[24px] font-[400]'>Let’s login with your previous account. </p>
            </div>

            <form className='grid gap-6 w-full '>
                <div className='flex flex-col gap-1 w-full'>
                    <label className='text-[#002550] text-[14px] font-[400] leading-[20px]'>Enter Mobile Number</label>
                    <div className='w-full relative '>
                    <input type='email' className='w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 pl-14 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 ' placeholder='96199 47596'/>
                    <span className='absolute top-[50%] translate-y-[-50%] left-2'>+91 {"  "} |</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-[#002550] text-[14px] font-[400] leading-[20px]'>Enter Password</label>
                    <div className='w-full relative'>
                    <input type={showPassword ? 'text' : 'password'}  className='w-full border-[1px] border-[#1A1A1A] border-opacity-20 outline-none  rounded-[8px] h-[44px] px-3 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 cursor-pointer' placeholder='Enter password'/>
                    {
                        showPassword ? <AiOutlineEye color='#002550' size={25} className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer' onClick={(e)=>handlePassword(e)}/> : <AiOutlineEyeInvisible onClick={(e)=>handlePassword(e)} color='#002550' size={25}className='absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer'/>
                    }
                    </div>
                <Link to={'/forgot-password'} className='mt-2 text-[14px] font-[400] leading-[20px]'>Forgot Password?</Link>
                </div>


               
            </form>
            <div className='w-full flex h-[59px] items-center justify-between border-[#1A1A1A] border-opacity-20 border-[1px] rounded-[8px] shadow-sm px-5'>
                <div className='flex gap-3  '>
                    <input type='checkbox'/>
                    <p className='text-[#344054] font-[500] font-inter'>I'm not a robot</p>
                </div>
                <div>
                <img src={captcha}/>
                </div>
                </div>
            <div className='-mt-4'>
                    <button type='submit' className='bg-[#002550] w-full h-[44px] rounded-[8px] text-white font-inter font-[500]' onClick={()=> naviagate('/dashboard')}>Verify</button>
                </div>

               
        </div>
      </div>
      <div className='hidden md:grid w-[50%] h-full bg-cover bg-center bg-no-repeat bg-login' >
        <div className='w-full h-full flex items-center justify-center text-white flex-col gap-20 font-opensans'>
            <img src={logo} alt='logo'/>
            <div className='w-full text-center flex items-center justify-center flex-col px-3'>
                <p className='text-[24px] font-[600] leading-[32px]'> Making your Real Estate purchase journey </p>
                <p className='text-[32px] font-[700] leading-[43px]'>faster, reliable and transparent</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
