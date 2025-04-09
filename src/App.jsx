import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}><Hero /><Menu /><Cards searchTerm={searchTerm} /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/service" element={<Layout><Service /></Layout>} />
        <Route path="/cart" element={<Layout><div className="text-center text-white py-10 text-3xl">Shopping Cart</div></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
