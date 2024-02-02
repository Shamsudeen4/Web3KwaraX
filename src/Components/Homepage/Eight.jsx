import React from 'react'
import imag from '../Images/CommunityMem Img.png'

function Eight() {
  return (
    <div>
      <div className=' flex font-lexend bg-primary items-center gap-[100px] justify-center py-[3%] sm:flex-col sm:py-[15%]'>
      <div className='  flex flex-col items-start gap-[20px] '>
        <h1 className='text-[40px] w-[28vw] text-white leading-[45px] font-semibold capitalize sm:w-[80vw] sm:text-[37px]'>journey to join over 2,000+ members in the community</h1>
        <button className=' bg-secondary text-white px-[45px] py-[10px] rounded-2xl hover:bg-primary duration-300 border-[2px] border-secondary hover:text-secondary '>Join Now</button>
      </div>
      <img className='sm:w-[80vw]' src={imag} alt="" />
      </div>
    </div>
  )
}

export default Eight
