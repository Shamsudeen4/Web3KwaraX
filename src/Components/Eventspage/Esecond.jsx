import React from 'react'
import Props from '../Homepage/Props'
import logo from '../Images/Event1.png'
import logo1 from '../Images/Event2.png'
import logo2 from '../Images/Event3.png'
import logo3 from '../Images/Event5.png'
import logo4 from '../Images/Event6.png'
import logo5 from '../Images/Event8.png'
import logo6 from '../Images/Event5 (1).png'
import logo7 from '../Images/Event6 (1).png'
import logo8 from '../Images/Event8 (1).png'
function Esecond() {
  return (
    <div className='bg-primary font-lexend'>
      <div className=' flex flex-col gap-16 justify-center items-center py-[5%]'>
      <div className=' text-[white] flex flex-col items-center gap-4'>
            <h1 className='text-[40px] font-semibold w-[43vw] text-center capitalize leading-[50px] sm:text-[35px] sm:w-[70vw]'>meet the team</h1>
            <p className=' text-[16px] w-[30vw] text-center sm:w-[70vw] text-[#FFFFFF99]'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</p>
        </div>
        <div className=' flex flex-col gap-11'>
        <div className=' flex gap-10 sm:flex-col'>
              <Props 
                image={logo} 
                title="Decentralized Finance (DeFi) Symposium" paragraph="A deep dive into the world of DeFi, exploring how decentralized financial solutions can benefit individuals in Kwara State."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo1} 
                title="Web3Kwara Blockchain Workshop" paragraph="An educational event focusing on the fundamentals of blockchain technology and its potential applications."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo2} 
                title="NFT Showcase and Art Auction" paragraph="Highlighting the world of Non-Fungible Tokens (NFTs) and showcasing local artists and their NFT creations."
                date="Fri, may 27, 8: 30 AM"
              />
            </div>
            <div className=' flex gap-10 sm:flex-col'>
              <Props 
                image={logo3} 
                title="Blockchain for Social Impact" paragraph="Exploring how blockchain and Web3 technologies can be harnessed for social and environmental good in Kwara State."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo4} 
                title="Web3 Hackathon: Building for Kwara" paragraph="A hands-on event where developers and entrepreneurs come together to build Web3 solutions addressing local challenges."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo5} 
                title="Crypto Investment and Trading Masterclass" paragraph="Educating attendees on safe and responsible cryptocurrency investment and trading strategies."
                date="Fri, may 27, 8: 30 AM"
              />
            </div>
            <div className=' flex gap-10 sm:flex-col'>
              <Props 
                image={logo6} 
                title="Web3Kwara Developer Hackathon" paragraph="A hackathon inviting developers to build innovative decentralized applications (DApps) and blockchain solutions for local challenges."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo7} 
                title="Blockchain and Business: Transforming Kwara's Economy" paragraph="Exploring how blockchain technology can enhance business processes, reduce costs, and drive economic growth in Kwara State."
                date="Fri, may 27, 8: 30 AM"
              />
              <Props 
                image={logo8} 
                title="Web3Kwara Community Roundtable" paragraph="A recurring event where the local Web3 community gathers to discuss the latest trends, share insights, and foster collaboration."
                date="Fri, may 27, 8: 30 AM"
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Esecond
