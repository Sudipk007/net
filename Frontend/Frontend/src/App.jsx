import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Services from './Services';
import Contact from './contact';
import './App.css'; // We'll create this for basic styling
import Footer from './Footer';
import ChatIcon from './ChatIcon';
import ChatWindow from './ChatWindow';
import Login from './Login';
import Signup from './Signup';
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
      <ChatIcon/>
      {/* {isChatOpen && <ChatWindow onClose={toggleChat} />} */}
      
      <Footer></Footer>
    </>
  );
}

export default App;