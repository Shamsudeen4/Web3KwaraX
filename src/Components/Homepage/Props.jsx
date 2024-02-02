import React from 'react'

function Props(props) {
  return (
    <div>
      <div className=' font-lexend flex flex-col gap-4 items-start'>
        <img src={props.image} alt="" />
        <div className=' flex items-center gap-4'>
          <span className=' w-[54px] h-[6px] block bg-secondary rounded-lg'></span>
          <p className=' text-secondary font-medium'>Upcoming</p>
        </div>
        <h1 className='text-[#F5F5F5] text-[25px] leading-7 w-[20vw] font-semibold sm:w-[78vw]'>{props.title}</h1>
        <p className=' text-[#FFFFFF99] w-[22vw] text-[14px] sm:w-[90vw]'>{props.paragraph}</p>
        <p className=' text-secondary capitalize'>{props.date}</p>
      </div>
    </div>
  )
}

export default Props
