import React from 'react'
import Thprops from './Thprops'
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import person from '../Images/Ellipse 44.png'
import person1 from '../Images/Ellipse 45.png'
import person2 from '../Images/Ellipse 46.png'
import person3 from '../Images/Ellipse 47.png'
import { TbBrandLinkedin } from "react-icons/tb";

function Afifth() {
  return (
    <div className=' font-lexend bg-tertiary'>
      <div className=' flex flex-col justify-center items-center gap-14 py-[5%]'>
        <div className=' text-[white] flex flex-col items-center gap-4'>
            <h1 className='text-[40px] font-semibold w-[43vw] text-center capitalize leading-[50px] sm:text-[35px] sm:w-[70vw]'>meet the team</h1>
            <p className=' text-[16px] w-[30vw] text-center sm:w-[70vw] text-[#FFFFFF99]'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        </div>
        <div className=' flex gap-11 sm:flex-col'>
            
          <Thprops image={person} name="Ajisefinni Joy" title="Community lead" twitter={<FiTwitter size={20} color='white' />} insta={<FaInstagram size={20} color='white' />} linked={<TbBrandLinkedin size={20} color='white' />}/>
          <Thprops image={person1} name="Jays Alimi" title="Product designer" twitter={<FiTwitter size={20} color='white' />} insta={<FaInstagram size={20} color='white' />} linked={<TbBrandLinkedin size={20} color='white' />}/>
          <Thprops image={person2} name="Samuel Mike" title="Team lead" twitter={<FiTwitter size={20} color='white' />} insta={<FaInstagram size={20} color='white' />} linked={<TbBrandLinkedin size={20} color='white' />}/>
          <Thprops image={person3} name="Abdulrouf D.D" title="Community lead" twitter={<FiTwitter size={20} color='white' />} insta={<FaInstagram size={20} color='white' />} linked={<TbBrandLinkedin size={20} color='white' />}/>
        </div>
      </div>
    </div>
  )
}

export default Afifth
