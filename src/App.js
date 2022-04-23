import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
