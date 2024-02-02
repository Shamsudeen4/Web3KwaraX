import React from 'react'
import Navbar from '../Navbar'
import Ehero from './Ehero'
import Esecond from './Esecond'
import Eight from '../Homepage/Eight'
import Footer from '../Homepage/Footer'

function Events() {
  return (
    <div>
      <Navbar event="active"/>
      <Ehero/>
      <Esecond/>
      <Eight/>
      <Footer/>
    </div>
  )
}

export default Events
