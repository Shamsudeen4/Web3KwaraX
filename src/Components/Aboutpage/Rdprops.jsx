import React from 'react'

function Rdprops(props) {
  return (
    <div className=' font-lexend flex flex-col items-start text-white'>
      <div className=' flex items-start flex-col bg-tertiary gap-4 p-[40px] rounded-lg h-[47vh]'>
        <div className=' bg-secondary rounded-[50%] p-2 px-4'><p>{props.number}</p></div>
        <div className=' flex flex-col gap-4 '>
            <h1 className=' text-[20px]'>{props.head}</h1>
            <p className=' text-[14px] text-[#FFFFFF80] w-[17vw] sm:w-[70vw]'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Rdprops
