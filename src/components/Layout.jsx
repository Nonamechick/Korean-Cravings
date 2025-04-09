import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, searchTerm, setSearchTerm, cartItems }) => {
  const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <div className="min-h-screen bg-neutral">
      <Navbar searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      cartCount={cartCount}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;