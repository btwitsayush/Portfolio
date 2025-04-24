import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/Hero'
import About from './components/pages/About'
import Journey from './components/pages/Journey'
// import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-journey" element={<Journey />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
