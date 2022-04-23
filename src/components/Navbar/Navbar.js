import React from 'react'
import './navbar.css'

const Navbar = () => {
    return <div className='navbar-div'>
        <div className='container navbar'>
            <div className='logo'>
                <p><a href='/'>41-eatery</a></p>
            </div>
            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/products'>Product</a></li>
                <li><a href='/contact'>Contact</a></li>

            </ul>
            <div>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>
       </div>
    </div>
}

export default Navbar;