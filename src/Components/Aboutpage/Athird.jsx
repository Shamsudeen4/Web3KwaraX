import React from 'react'
import { FaCheck } from "react-icons/fa";
import first from '../Images/Group 444.png'
import second from '../Images/Group 41.png'
function Athird() {
  return (
    <div className='bg-tertiary font-lexend py-[5%] flex flex-col justify-center gap-16 sm:py-[15%]'>
      <div className=' flex  text-white justify-center  gap-[60px] items-center sm:flex-col'>
        <div className=' flex flex-col gap-[40px] ' >
            <div className=' flex flex-col gap-3'>
                <h1 className=' text-[40px] font-semibold sm:text-[35px]'>Mission Statement</h1>
                <p className=' text-[#FFFFFF80] text-[16px] w-[32.5vw] sm:w-[85vw] sm:text-[14px]'>At Web3Kwara, our mission is to democratize access to the transformative power of Web3 technologies for the people of Kwara State. We are dedicated to fostering innovation, inclusivity, and economic empowerment through blockchain, decentralized applications (DApps), and emerging technologies. By educating, engaging, and empowering our community, we aim to bridge the digital divide and create a more equitable future for all.</p>
            </div>
            <div className=' flex gap-[40px] sm:flex-col  sm:gap-[20px]'>
                <div className=' flex items-center gap-[15px]'>
                    <div className=' bg-secondary p-2 rounded-[50%] '><FaCheck color="#0B132B" /></div>
                    <p>Democratics access</p>
                </div>
                <div className=' items-center flex gap-[15px]'>
                    <div className=' bg-secondary p-2 rounded-[50%] '><FaCheck color="#0B132B" /></div>
                    <p className=' w-[10vw] sm:w-[70vw]'>Foster Innovation and Inclusivity</p>
                </div>
                
            </div>
        </div>
        <div>
            <img className='sm:w-[90vw]' src={first} alt="" />
        </div>
      </div>
      <div className=' flex  text-white justify-center  gap-[60px] items-center sm:flex-col'>
        <div className=' flex flex-col gap-[40px] ' >
            <div className=' flex flex-col gap-3'>
                <h1 className=' text-[40px] font-semibold sm:text-[35px]'>Vision Statement</h1>
                <p className=' text-[#FFFFFF80] text-[16px] w-[32.5vw] sm:w-[85vw] sm:text-[14px]'>Our vision for Web3Kwara is a Kwara State where every individual, regardless of background or location, can harness the opportunities presented by Web3 technologies. We aspire to see a thriving ecosystem of blockchain-based solutions that address local challenges, stimulate economic growth, and enhance transparency in governance.</p>
            </div>
            <div className=' flex gap-[40px] sm:flex-col  sm:gap-[20px]'>
                <div className=' flex items-center gap-[15px]'>
                    <div className=' bg-secondary p-2 rounded-[50%] '><FaCheck color="#0B132B" /></div>
                    <p>Thriving Web3 Ecosystem</p>
                </div>
                <div className=' items-center flex gap-[15px]'>
                    <div className=' bg-secondary p-2 rounded-[50%] '><FaCheck color="#0B132B" /></div>
                    <p className=' w-[10vw] sm:w-[70vw]'>Empowered Community</p>
                </div>
                
            </div>
        </div>
        <div>
            <img className='sm:w-[90vw]' src={second} alt="" />
        </div>
      </div>
    
    </div>
  )
}

export default Athird
