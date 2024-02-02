import React from 'react'
import pic from '../Images/ActivitiesImg.png'
import logo from '../Images/Workshop Icon.png'
import logo1 from '../Images/Hackaton Icon.png'
import logo2 from '../Images/EventIcon.png'
import logo3 from '../Images/ScholarshipIcon.png'
import logos from '../Images/Frame 159.png'

function Sixth() {
  return (
    <div className='bg-tertiary'>
      <div className=' font-lexend text-white flex flex-col items-center gap-[150px] sm:gap-[70px] lg:py-[4%] sm:py-[14%]'>
        <div className=' flex  gap-[200px] sm:gap-[70px] justify-center sm:flex-col sm:items-center'>
            <img className='sm:w-[75vw]' src={pic} alt="" />
            <div className=' flex flex-col gap-11'>
                <div className=' flex flex-col gap-3 text-white '>
                    <div className=' flex items-center gap-4'><span className=' w-[90px] h-[10px] bg-secondary rounded-lg block'></span><p className=' text-[20px] font-semibold'>ACTIVITIES</p></div>
                        <h1 className=' capitalize font-semibold text-[40px] leading-[45px] sm:w-[90vw] sm'>Be part of our vision</h1>
                </div>
                <div className=' flex flex-col gap-4'>
                    <div className='flex items-center gap-4 '><img src={logo} alt="" /> <p className=' text-[20px]'>workshop</p> </div>
                    <div className='flex items-center gap-4 '><img src={logo1} alt="" /> <p className=' text-[20px]'>hackathon</p> </div>
                    <div className='flex items-center gap-4 '><img src={logo2} alt="" /> <p className=' text-[20px]'>events</p> </div>
                    <div className='flex items-center gap-4 '><img src={logo3} alt="" /> <p className=' text-[20px]'>scholarship</p> </div>
                    
                </div>
            </div>
        </div>
        <div className=' flex items-center gap-11 flex-col sm:items-start sm:gap-8 '>
            <div className=' flex flex-col gap-3 text-white items-center sm:items-start '>
                 <div className=' flex items-center gap-4'><span className=' w-[90px] h-[10px] bg-secondary rounded-lg block'></span><p className=' text-[20px] font-semibold'>PARTNERS</p></div>
                 <h1 className=' capitalize font-semibold text-[40px] leading-[45px] sm:w-[90vw] sm'>Our Partners & Sponsors</h1>
            </div>
            <img className=' sm:w-[70vw]' src={logos} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sixth
