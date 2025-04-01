import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from './Hero.jsx';
import Footer from './Footer.jsx';
import Cards from './Cards.jsx';
import Menu from './Menu.jsx';
import About from './About.jsx';
import Service from './Service.jsx';


const Layout = () => {
  return (
      <div className="min-h-screen bg-neutral">
        <Navbar />
        <Hero />
        <Menu />
        <Cards />
        <About />
        <Service />
        <Footer />
      </div>
  )
}

export default Layout