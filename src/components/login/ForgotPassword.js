import React, { useState } from "react";
import logo from "../../assets/logo.png";
import eye from "../../assets/eye-slash.png";
import captcha from "../../assets/logos_recaptcha.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import Countdown from "react-countdown";
import SetPassword from "./SetPassword";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [resend, setResend] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>00:00</div>;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordActive(true)
  }
  return (
    <div className="w-full h-screen flex">
    { !passwordActive ?
      <div className="w-[50%] h-full flex items-center justify-center font-opensans">
        <div className="grid gap-10 w-[60%]">
          <div>
            <p className="text-[40px] font-[700] text-[#002550] leading-[54px]">
              Set New Password
            </p>
            <p className="leading-[24px] font-[400]">
              Let’s sign up for better experience{" "}
            </p>
          </div>

          <form id="myform" className="grid gap-6 w-full " >
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#002550] text-[14px] font-[400] leading-[20px]">
                Enter Mobile Number
              </label>
              <div className="w-full relative ">
                <input
                  type="email"
                  className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 pl-14 pr-16 placeholder:text-[#1a1a1a] placeholder:font-[300] placeholder:opacity-20 border-opacity-20 "
                  required
                  placeholder="Enter Moblie Number"
                />
                <span className="absolute top-[50%] translate-y-[-50%] left-2">
                  +91 {"  "} |
                </span>
                <p className="absolute top-[50%] translate-y-[-50%] right-2 text-[12px] font-[400] text-[#002550] cursor-pointer    " onClick={()=> setResend(true)}>
                  Send OTP
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#002550] text-[14px] font-[400] leading-[20px]">
                Enter OTP
              </label>
              <div className="w-full relative">
                <input
                  type="text"
                  className="w-full border-[1px] border-[#1A1A1A] border-opacity-20 outline-none  rounded-[8px] h-[44px] px-3 placeholder:text-[#1a1a1a] placeholder:font-[300] placeholder:opacity-20 "
                  placeholder="Enter OTP"
                  required
                />
              </div>
              {
                resend &&
                 <div className="mt-2 text-[#1A1A1A] text-[12px] font-[400] leading-[20px] flex justify-between">
                 <Countdown date={Date.now() + 119000} renderer={renderer} />
                 <p className="text-[#002550] cursor-pointer">Resend OTP</p>
               </div>
}
            
            </div>

            <button
            id="myform"
              type="submit"
              className="bg-[#002550] w-full h-[44px] rounded-[8px] text-white font-inter font-[500]"
              onClick={(e)=> handleSubmit(e)}
            >
              Verify
            </button>
          </form>

          <div>
           
          </div>

          <div className="w-full flex h-[59px] items-center justify-between border-[#1A1A1A] border-opacity-20 border-[1px] rounded-[8px] shadow-sm px-5 -mt-4">
            <div className="flex gap-3  ">
              <input type="checkbox" />
              <p className="text-[#344054] font-[500] font-inter">
                I'm not a robot
              </p>
            </div>
            <div>
              <img src={captcha} alt="captcha"/>
            </div>
          </div>
        </div>
      </div>
      :
      <SetPassword/>
      }
      <div className="w-[50%] h-full bg-cover bg-center bg-no-repeat bg-login">
        <div className="w-full h-full flex items-center justify-center text-white flex-col gap-20 font-opensans">
          <img src={logo} alt="logo" />
          <div className="w-full text-center flex items-center justify-center flex-col">
            <p className="text-[24px] font-[600] leading-[32px]">
              {" "}
              Making your Real Estate purchase journey{" "}
            </p>
            <p className="text-[32px] font-[700] leading-[43px]">
              faster, reliable and transparent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
