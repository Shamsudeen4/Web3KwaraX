import React from 'react'
import './Rd.css'
import pic from '../Images/AboutImg.png'
function Rdpage() {
  return (
    <div>
      <div className=' flex items-center bg-tertiary text-white font-lexend justify-center gap-[200px] py-[7%] sm:flex-col sm:gap-[50px]'>
        <img className=' sm:w-[70vw]' src={pic} alt="" />
        <div className=''>
            <div className=' flex items-center gap-4'>
            <span className=' w-[90px] block h-[10px] bg-secondary rounded-2xl '></span>
            <p className='text-[20px] font-semibold'>ABOUT</p></div>
            <h1 className=' font-semibold text-[40px] sm:text-[30px]'>About Web 3Kwara</h1>
            <p className=' text-[#FFFFFF99] text-[16px] w-[30vw] sm:w-[85vw] text-left'>Web3Kwara is a community dedicated 
                to spreading awareness and driving 
                adoption of Web3, blockchain 
                technology, and its potential in the 
                Kwara State. We are a group of 
                individuals passionate about the 
                future of the Web3 and believe that 
                Web3 has the potential to revolutionize 
                the way we interact and transact With 
                the internet.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Rdpage
