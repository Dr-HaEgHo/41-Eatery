import React from 'react'
import './App.css';
import Contact from "./components/contact/Contact"
import { BrowserRouter,   Routes,   Route,} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Products from './components/Products/Products';
// import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>

          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
