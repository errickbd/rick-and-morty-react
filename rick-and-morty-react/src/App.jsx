import { useState } from 'react'
import './App.css'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./Components/Navbar.css"
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters'
import Story from './pages/Story'



function App() {
  
  return (
    <>
    
      <Navbar />
      
      <Outlet/>
    
    </>
  )
}

export default App
