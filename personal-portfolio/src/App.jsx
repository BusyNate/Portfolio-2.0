import Home from './Pages/Landing Page/Home'
import WorkFlow from './Pages/Workflow Page/WorkFlow'
import Contact from './Pages/Contact Page/Contact'
import Gallery from './Pages/Gallery/Gallery'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {



  const home = {
    title:"Hello, I'm Manqoba Nathan Mtetwa",
    desr: "I am an upcoming Designer and Developer based in Johannesburg. I zealously strive towards carefully designing beautiful UIs, writing clean and efficient code for web-applications and managing technical projects. As a fresh graduate from Belgium Campus, I am eager to land my first role as a",
    p:"Junior Developer.",
    CVlink: "-------", img: './src/assets/Me.png'
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Home home={home} />} />
      <Route path="/workflow" element={<WorkFlow />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
