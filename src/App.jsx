import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div className="max-w-7xl mx-auto p-4">Home Page</div>;
const About = () => <div className="max-w-7xl mx-auto p-4">About Page</div>;
const Contact = () => <div className="max-w-7xl mx-auto p-4">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;