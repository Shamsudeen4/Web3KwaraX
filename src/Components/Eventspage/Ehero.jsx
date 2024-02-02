import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FaArrowRightLong } from "react-icons/fa6";
import himage from '../Images/Group 44.png'
// import stars from '../Images/StarDoddle.png'
function Ehero() {
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
      
    

      <div className=' flex items-center bg-tertiary font-lexend text-white lg:gap-[120px] sm:gap-[60px]   sm:py-[12%] justify-center sm:flex-col  '>
      <animated.div onTouchMove={handleClick} style={springs}>
        <div className=' flex flex-col gap-9 items-start sm:items-center'>
            <div className=' flex flex-col gap-3 sm:items-center'>
                <h1 className=' font-semibold text-[50px] w-[37vw] leading-[60px] capitalize sm:text-[35px] sm:w-[70vw] sm:leading-[45px] sm:text-center'>Blockchain for Kwara - Empowering a Digital Future</h1>
                <p className=' text-[16px] w-[30vw] sm:w-[80vw] sm:text-center'>Discover the potential of decentralized finance, explore the world of NFTs, and learn how blockchain can revolutionize our communities.</p>
            </div>
            <button className=' bg-secondary px-[25px] py-[10px] rounded-2xl flex items-center gap-4 text-tertiary border-[2px] border-secondary hover:text-secondary hover:bg-transparent transition duration-300 cursor-pointer  '>Join Our Community <FaArrowRightLong /> </button>
        </div>
        </animated.div>
        <img className='sm:w-[80vw]' src={himage} alt="" />
       
      </div>
      
    </div>
  )
}

export default Ehero
