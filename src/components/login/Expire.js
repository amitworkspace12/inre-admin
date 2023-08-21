import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import expireImg from '../../assets/expire.png'
import { useNavigate } from 'react-router-dom'
import ExpirePassword from './ExpirePassword'

const Expire = () => {
    const navigate = useNavigate()
    const [activePassword, setPasswordActive] = useState(true)

    const handleCreatePasswords = () => {
      setPasswordActive(false)
    }
  return (
    <div className='w-full h-screen flex'>
        {
            activePassword ? 
      <div className='md:w-[50%] w-full h-full flex items-center justify-center font-opensans'>
       <div className='grid gap-8 lg:w-[60%] md:w-[80%] w-[90%] justify-center'>
        <img src={expireImg} alt='img' className='w-[240px] h-[240px]'/>
        <div>
            <p className='text-[40px] font-[700] text-[#002550] leading-[54px]'>Oops!</p>
            <p className='leading-[24px] font-[400]'>Looks like your password has expired </p>
            </div>

            <div>
                    <button type='submit' className='bg-[#002550] w-full h-[44px] rounded-[8px] text-white font-inter font-[500]' onClick={handleCreatePasswords}>Create New Password</button>
                </div>

       </div>
      </div>

      : <ExpirePassword/>

        }
      <div className='hidden md:grid w-[50%] h-full bg-cover bg-center bg-no-repeat bg-login' >
        <div className='w-full h-full flex items-center justify-center text-white flex-col gap-20 font-opensans'>
            <img src={logo} alt='logo'/>
            <div className='w-full text-center flex items-center justify-center flex-col'>
                <p className='text-[24px] font-[600] leading-[32px]'> Making your Real Estate purchase journey </p>
                <p className='text-[32px] font-[700] leading-[43px]'>faster, reliable and transparent</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Expire
