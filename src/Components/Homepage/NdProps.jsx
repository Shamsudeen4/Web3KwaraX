import React from 'react'

function NdProps(props) {
  return (
    <div>
      <div className=' font-lexend bg-primary flex flex-col gap-2 items-center  rounded-2xl w-[17vw] sm:w-[80vw]'>
        <img className=' relative bottom-[50px]' src={props.image} alt="" />
        <h2 className=' text-white capitalize text-[25px]' >{props.name}</h2>
        <p className=' text-[#F5F5F580] text-[14px]'>{props.title}</p>
        <div className=' flex text-primary gap-3  pt-[15px] pb-[25px]'>
          <div className=' bg-secondary p-2 rounded-[50%] cursor-pointer'>{props.twitter}</div>
          <div className=' bg-secondary p-2 rounded-[50%] cursor-pointer'>{props.linkedin}</div>
          <div className=' bg-secondary p-2 rounded-[50%] cursor-pointer'>{props.instagram}</div>
        </div>
      </div>
    </div>
  )
}

export default NdProps
