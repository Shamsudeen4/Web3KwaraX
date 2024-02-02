import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import logo from '../Images/Web 3 Kwara web logo-25 1.png'
function Footer() {
  return (
    <div className='bg-tertiary font-lexend'>
      <div className='  flex items-center flex-col gap-[35px] py-[2%] text-white sm:py-[8%]'>
        <div className=' flex justify-around gap-[260%] sm:gap-8 sm:items-center  '>
            <img className='sm:w-[35vw]' src={logo} alt="" />
            <div className=' flex items-center gap-3'>
              <div className=' bg-secondary p-2 rounded-[50%]'> <FiTwitter size={20} /></div>
              <div className=' bg-secondary p-2 rounded-[50%]'> <LiaLinkedin size={20} /></div>
              <div className=' bg-secondary p-2 rounded-[50%]'><FaInstagram size={20} /></div>
           </div>
        </div>
        <ul className=' text-[16px] bg-primary gap-14 py-[2%] px-[20%] rounded-[20px] flex items-center capitalize text-[white] sm:gap-[20px] sm:text-[14px]  '>
            <a href="/about"><li className=' hover:text-secondary transition duration-300'>About</li></a>
            <a href="/events"><li className=' hover:text-secondary transition duration-300'>Blog</li></a>
            <a href="/events"><li className=' hover:text-secondary transition duration-300'>Event</li></a>
            <a href="/terms"><li className=' sm:w-[32vw] hover:text-secondary transition duration-300'>Terms Of Services</li></a>
           
        </ul>
        <p className=' text-[#FFFFFF99] text-[16px]'>All Right Reserve - Web3Kwara.org</p>
      </div>
    </div>
  )
}

export default Footer
