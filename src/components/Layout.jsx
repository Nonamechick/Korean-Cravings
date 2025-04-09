import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, searchTerm, setSearchTerm }) => {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
