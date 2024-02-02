import React from 'react'
import NdProps from './NdProps'
import joy from '../Images/JoysImg.png'
import pre from '../Images/PreciousImg.png'
import jays from '../Images/JaysImg.png'
import tosh from '../Images/ToshImg.png'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
function Fifth() {
  return (
    <div>
        <div className=' flex flex-col items-center bg-tertiary sm:py-[20%] lg:py-[5%]'>
      <div className=' font-lexend flex flex-col gap-32 items-start sm:items-center'>
      
       
  
        
        <div className='flex gap-6 items-start sm:flex-col sm:items-center sm:gap-20'>
            <NdProps image={joy} title="Host" name="ajisefinni joy" twitter={<FiTwitter size={20} />} linkedin={<LiaLinkedin size={20} />} instagram={<FaInstagram size={20} />} />
            <NdProps image={pre} title="Organizer" name="precious okpara" twitter={<FiTwitter size={20} />} linkedin={<LiaLinkedin size={20} />} instagram={<FaInstagram size={20} />} />
            <NdProps image={jays} title="Host Assistant" name="jays alimi" twitter={<FiTwitter size={20} />} linkedin={<LiaLinkedin size={20} />} instagram={<FaInstagram size={20} />} />
            <NdProps image={tosh} title="Host" name="tosh money" twitter={<FiTwitter size={20} />} linkedin={<LiaLinkedin size={20} />} instagram={<FaInstagram size={20} />} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Fifth
