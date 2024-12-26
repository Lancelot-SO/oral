/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import About from './Pages/About'
import Report from './Pages/Report'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/report' element={<Report />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App