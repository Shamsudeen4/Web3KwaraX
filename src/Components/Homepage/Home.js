import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Ndpage from './Ndpage'
import Rdpage from './Rdpage'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eight from './Eight'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar home="active"/>
      <Hero/>
      <Ndpage/>
      <Rdpage/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eight/>
      <Footer/>
    </div>
  )
}

export default Home
