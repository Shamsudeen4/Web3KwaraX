import React from 'react'
import Ahero from './Ahero'
import Navbar from '../Navbar'
import Asecond from './Asecond'
import Athird from './Athird'
import Afourth from './Afourth'
import Afifth from './Afifth'
import Seventh from '../Homepage/Seventh'
import Eight from '../Homepage/Eight'
import Footer from '../Homepage/Footer'

function About() {
  return (
    <div>
        <Navbar about="active"/>
        <Ahero/>
        <Asecond/>
        <Athird/>
        <Afourth/>
        <Afifth/>
        <Seventh/>
        <Eight/>
        <Footer/>
    </div>
  )
}

export default About
