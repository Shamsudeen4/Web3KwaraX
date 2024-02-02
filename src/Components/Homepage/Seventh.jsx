import React from 'react'
import './Seventh.css'
function Seventh() {
  return (
    <div className='bg-tertiary font-lexend flex items-center flex-col py-[5%] sm:py-[15%] '>
      <div className='bg bg-primary flex flex-col items-start gap-4 lg:pl-[70px] sm:pl-[30px] lg:pr-[500px] sm:w-[100%] py-[80px] rounded-[20px] '>
        <h1 className='text-[30px] w-[23vw] text-white leading-9 sm:w-[85vw]'>Explore The Potential Of Web3 & Blockchain</h1>
        <button className=' bg-secondary text-tertiary px-[20px] py-[10px] rounded-2xl hover:bg-primary duration-300 border-[2px] border-secondary hover:text-secondary'>Learn More</button>
      </div>
    </div>
  )
}

export default Seventh
