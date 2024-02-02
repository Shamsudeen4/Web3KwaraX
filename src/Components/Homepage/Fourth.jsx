import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Props from './Props';
import logo from '../Images/Event1.png'
import logo1 from '../Images/Event2.png'
import logo2 from '../Images/Event3.png'
import logo3 from '../Images/Event5.png'
import logo4 from '../Images/Event6.png'
import logo5 from '../Images/Event8.png'
function Fourth() {
  return (
    <div className=''>
      <div className=' font-lexend bg-tertiary text-white flex items-center flex-col gap-[70px] sm:gap-[40px] sm:py-[10%] lg:py-[3%]'>
        <div className=' flex items-center sm:items-start justify-around gap-[650px] sm:flex-col sm:gap-[20px]'>
            <div className=' flex flex-col gap-3 '>
                <div className=' flex items-center gap-4'><span className=' w-[90px] h-[10px] bg-secondary rounded-lg block'></span><p className=' text-[20px] font-semibold'>EVENTS</p></div>
                <h1 className=' capitalize font-semibold text-[40px] w-[20vw] leading-[45px] sm:w-[90vw]'>Connect, share, learn</h1>
            </div>
            <button className='hover:bg-secondary px-[25px] py-[10px] rounded-2xl flex items-center gap-4 hover:text-tertiary border-[2px] border-secondary text-secondary hover:bg-transparent transition duration-300 cursor-pointer '>View All Event  <FaArrowRightLong /> </button>
        </div>
        <div className=' font-lexend flex flex-col gap-[50px] sm:flex-col'>
            <div className=' flex gap-10 sm:flex-col'>
              <Props 
                image={logo} 
                title="Decentralized Finance (DeFi) Symposium" paragraph="A deep dive into the world of DeFi, exploring how decentralized financial solutions can benefit individuals in Kwara State."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo1} 
                title="Web3Kwara Blockchain Workshop" paragraph="An educational event focusing on the fundamentals of blockchain technology and its potential applications."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo2} 
                title="NFT Showcase and Art Auction" paragraph="Highlighting the world of Non-Fungible Tokens (NFTs) and showcasing local artists and their NFT creations."
                date="Fri, may 27, 8: 30 AM"
              />
            </div>
            <div className=' flex gap-10 sm:flex-col'>
              <Props 
                image={logo3} 
                title="Blockchain for Social Impact" paragraph="Exploring how blockchain and Web3 technologies can be harnessed for social and environmental good in Kwara State."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo4} 
                title="Web3 Hackathon: Building for Kwara" paragraph="A hands-on event where developers and entrepreneurs come together to build Web3 solutions addressing local challenges."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo5} 
                title="Crypto Investment and Trading Masterclass" paragraph="Educating attendees on safe and responsible cryptocurrency investment and trading strategies."
                date="Fri, may 27, 8: 30 AM"
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fourth
