import React from 'react'
import Rdprops from './Rdprops'
function Afourth() {
  return (
    <div className=' font-lexend bg-primary'>
      <div className=' flex flex-col justify-center items-center gap-14 py-[5%]'>
        <div className=' text-[white] flex flex-col items-center gap-4'>
            <h1 className='text-[40px] font-semibold w-[43vw] text-center capitalize leading-[50px] sm:text-[35px] sm:w-[70vw]'>Core values of web3Kwara initiative</h1>
            <p className=' text-[16px] w-[30vw] text-center sm:w-[70vw]'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        </div>
        <div className=' flex flex-col gap-11'>
            <div className='flex justify-center gap-[50px] sm:flex-col'>
               <Rdprops number="1" head="Inclusivity" text="We are committed to creating an inclusive environment where everyone, regardless of their background, can participate and benefit from Web3 technologies. We believe that diversity of perspectives and experiences enriches our community and leads to more robust solutions." />
               <Rdprops number="2" head="Transparency" text="Transparency is at the heart of our operations. We believe in open and accountable communication with our community members, partners, and stakeholders. We are dedicated to ensuring that our actions and decisions are clear and understandable." />
               <Rdprops number="3" head="Empowerment" text="We seek to empower individuals and communities through education, resources, and opportunities. We believe that by providing the tools and knowledge needed to engage with Web3 technologies, we can enable people to take control of their digital futures." />
            </div>
            <div className='flex justify-center gap-[50px] sm:flex-col'>
               <Rdprops number="4" head="Innovation" text="Innovation drives our mission. We encourage creativity, experimentation, and the development of groundbreaking solutions that address the unique challenges faced by Kwara State and its residents." />
               <Rdprops number="5" head="Collaboration" text="We understand the power of collaboration. We actively seek partnerships with local and global organizations, projects, and individuals who share our mission and can help us amplify our impact." />
               <Rdprops number="6" head="Ethical Responsibility" text="We uphold ethical principles in all our endeavors. We prioritize the responsible and ethical use of Web3 technologies, ensuring that our actions contribute positively to the well-being of the community and society at large." />
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Afourth
