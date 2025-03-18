import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';


const Layout = () => {
  return (
      <div className="min-h-screen bg-gray-500">
        <Navbar />
        <Hero />
        <Footer />
      </div>
  )
}

export default Layout