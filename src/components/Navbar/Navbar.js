import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const sideBar = document.getElementById('saide');
    const showSide = () => {
        sideBar.classList.add('active');
    }
    const closeSide = () => {
        sideBar.classList.remove('active')
    }


    return <div className='navbar-div'>
        <div className='container navbar'>
            <div className='logo'>
                <Link to="/"><p>41-Eatery</p></Link>
            </div>
            <ul className='nav-links'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/products'> Products </Link></li>
                <li><Link to='/contact'> Contact</Link></li>
                <li><Link to='/about'> About </Link></li>
            </ul>
            <div className='bars-div'>
                <h1 onClick={showSide}>=</h1>
            </div>
            <div className='btn-div'>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>
        </div>

        {/* ------------------------------------------------------------------------sidebar */}
          <div id="saide" className='side-bar'>
            <h1 onClick={closeSide}>x</h1>
            <ul className='side-links'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/products'> Products </Link></li>
                <li><Link to='/contact'> Contact</Link></li>
                <li><Link to='/about'> About </Link></li>
            </ul>
      </div>
    </div>
}

export default Navbar;