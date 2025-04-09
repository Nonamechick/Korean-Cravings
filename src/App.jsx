import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);  // Adds item to cart
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              cartItems={cartItems}
            >
              <Hero />
              <Menu />
              <Cards 
                searchTerm={searchTerm} 
                addToCart={addToCart} 
              />
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={<Layout><About /></Layout>} 
        />
        <Route 
          path="/service" 
          element={<Layout><Service /></Layout>} 
        />
        <Route 
          path="/cart" 
          element={
            <Layout cartItems={cartItems}>
              <Cart cartItems={cartItems} />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
