import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div className='navbar-div'>
        <div className='container navbar'>
            <div className='logo'>
                <p><a href='/'>41-eatery</a></p>
            </div>
            <ul className='nav-links'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/about'> About </Link></li>
                <li><Link to='/products'> Products </Link></li>
                <li><Link to='/contact'> Contact</Link></li>

            </ul>
            <div>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>
       </div>
    </div>
}

export default Navbar; 
