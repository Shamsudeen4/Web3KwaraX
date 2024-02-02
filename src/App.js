import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Homepage/Hero'
import Home from './Components/Homepage/Home'
// import Ndpage from './Components/Homepage/Ndpage'
import About from './Components/Aboutpage/About'
import Events from './Components/Eventspage/Events'
import Terms from './Components/Terms/Terms'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='' element={<Navbar/>} /> */}
        {/* <Route path='/hero' element={<Hero/>} /> */}
        <Route path='/' element={<Home/>} />
        {/* <Route path='/nd' element={<Ndpage/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App
