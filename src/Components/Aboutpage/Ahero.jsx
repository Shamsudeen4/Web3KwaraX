import React from 'react'
import left from '../Images/Group 40 (1).png'
import right from '../Images/Group 39.png'
function Ahero() {
  return (
    <div className=' bg-tertiary text-white overflow-x-hidden'>
        <div className=' font-lexend  flex justify-center items-center py-[8%] '>
            <img src={left} alt="" />
            <div className=' flex flex-col gap-6 items-center'>
                <h1 className=' text-[50px] capitalize  font-semibold w-[52vw] text-center leading-[50px] sm:text-[35px] sm:w-[77vw]'><span className=' text-secondary'> on a mission to </span> empower 200K+ members in kwara state.</h1>
                <p className=' text-[16px] w-[30vw] text-center sm:w-[80vw]'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
            </div>
            <img src={right} alt="" />
        </div>
    </div>
  )
}

export default Ahero
