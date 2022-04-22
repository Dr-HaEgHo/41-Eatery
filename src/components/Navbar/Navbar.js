import React from 'react'
import './navbar.css'

function Navbar() {
    return <div className='navbar-div'>
        <div className='container navbar'>
            <div className='logo'>
                <p>41-eatery</p>
            </div>
            <ul className='nav-links'>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#'>About Us</a></li>
                <li><a href='/#'>Product</a></li>
                <li><a href='/#'>Contact</a></li>

            </ul>
            <div>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>
       </div>
    </div>
}

export default Navbar;