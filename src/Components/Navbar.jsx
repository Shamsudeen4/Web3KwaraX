import React, { useState } from 'react'
import logo from './Images/Web 3 Kwara web logo-25 1.png'
function Navbar(props) {
    const[menu, setMenu] = useState(false)
    const toggle = ()=>{
        setMenu(!menu)
    }
  return (
    <div>
        <div className=' flex  flex-col font-lexend text-white text-[16px] items-center bg-[#0B132B] py-[2%] sm:py-[4%] lg:h-[20vh]'>
          <nav className=' flex lg:justify-around bg-[#0E1939CC] items-center lg:gap-[300px] px-[50px] py-[20px] border-[#FFFFFF1A] border-[3px] rounded-2xl sm:gap-[80px]'>
            <img className='sm:w-[30vw] cursor-pointer' src={logo} alt="" />
            <ul className='flex items-center gap-[100px] sm:hidden'>
               <a href="/" className={props.home}><li className=' hover:text-secondary transition duration-500 cursor-pointer'>Home</li></a>
               <a href="/about" className={props.about}><li className=' hover:text-secondary transition duration-500 cursor-pointer'>About</li></a>
               <a href="/events" className={props.event}><li className=' hover:text-secondary transition duration-500 cursor-pointer'>Event</li></a>
               
            </ul>
            <button className='sm:hidden bg-secondary lg:px-[35px] lg:py-[10px] rounded-2xl hover:bg-transparent hover:text-secondary border-secondary border-[2px] transition duration-500'>Join Us</button>
            <button onClick={toggle} className={`lg:hidden ${menu ? 'toggle open' : 'toggle'} bg-transparent flex cursor-pointer min-w-[40px] h-[40px] flex-col items-center justify-center gap-[5px]  rounded-[10px]`}>
                <div className='first'></div>
                <div className='second'></div>
                <div className='third'></div>
            </button>
         </nav>
            <ul className={` flex uppercase  z-[500]  w-[100%]  transition-[all,3s,ease-linear] 
            ${menu ? "h-[160px]" : " h-[0px]"} flex-col px-5  lg:hidden sm:relative justify-center overflow-hidden
               gap-1 items-center ` }>
                <a href="/"><li className='m-3'>Home</li></a>
                <a href="/"><li className='m-3'>About</li></a>
                <a href="/"><li className='m-3'>Events</li></a>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
