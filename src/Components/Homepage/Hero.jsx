import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FaArrowRightLong } from "react-icons/fa6";
import himage from '../Images/Group 22 (1).png'
import stars from '../Images/StarDoddle.png'
function Hero() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }
  return (
    <div className=''>
      
    

      <div className=' flex items-center bg-tertiary font-lexend text-white lg:gap-[120px] sm:gap-[60px] py-[4%]  sm:py-[12%] justify-center sm:flex-col  '>
      <animated.div onTouchMove={handleClick} style={springs}>
        <div className=' flex flex-col gap-9 items-start sm:items-center'>
            <div className=' flex flex-col gap-3 sm:items-center'>
                <h1 className=' font-semibold text-[50px] w-[37vw] leading-[60px] capitalize sm:text-[35px] sm:w-[70vw] sm:leading-[45px] sm:text-center'><span className=' text-secondary'>Empowering</span> the Future of the Internet In Kwara State</h1>
                <p className=' text-[16px] w-[30vw] sm:w-[70vw] sm:text-center'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
            </div>
            <button className=' bg-secondary px-[25px] py-[10px] rounded-2xl flex items-center gap-4 text-tertiary border-[2px] border-secondary hover:text-secondary hover:bg-transparent transition duration-300 cursor-pointer  '>Join Our Community <FaArrowRightLong /> </button>
        </div>
        </animated.div>
        <img className='sm:w-[80vw]' src={himage} alt="" />
        <img className=' absolute left-[530px] top-[200px]' src={stars} alt="" />
      </div>
      
    </div>
  )
}

export default Hero
