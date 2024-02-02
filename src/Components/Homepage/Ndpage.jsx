import React from 'react'

function Ndpage() {
  return (
    <div>
      <div className=' font-lexend text-white flex gap-[450px] bg-primary justify-center py-[7%] sm:flex-col sm:gap-[70px] sm:text-center sm:items-center'>
         <h1 className='text-[40px] font-semibold w-[20vw] sm:w-[80vw] sm:text-[35px]'>With A Growing Of Over -</h1>
         <div className=' flex gap-[100px] sm:gap-[30px]' >
            <div className=' flex flex-col '>
                <h1 className=' font-semibold text-[40px]'>2K+</h1>
                <p className=' text-[16px]'>Community Members</p>
            </div>
            <div className=' flex flex-col '>
                <h1 className=' text-[40px] font-semibold'>10+</h1>
                <p className=' text-[16px]'>Partners & Sponsors</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Ndpage
