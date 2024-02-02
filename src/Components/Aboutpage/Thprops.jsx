import React from 'react'

function Thprops(props) {
  return (
    <div>
      <div className=' flex items-center flex-col gap-[25px] bg-primary px-16 py-14 rounded-[20px]'>
        <img src={props.image} alt="" />
        <div className=' text-white flex flex-col items-center'>
            <h1 className='text-[20px]'>{props.name}</h1>
            <p className='text-[14px]'>{props.title}</p>
        </div>
        <div className=' flex gap-3 '>
            <div className=' bg-secondary px-[14px] py-[16px] rounded-[15px]'>{props.twitter}</div>
            <div className=' bg-secondary px-[14px] py-[16px] rounded-[15px]'>{props.insta}</div>
            <div className=' bg-secondary px-[14px] py-[16px] rounded-[15px]'>{props.linked}</div>
            
        </div>
      </div>
    </div>
  )
}

export default Thprops
