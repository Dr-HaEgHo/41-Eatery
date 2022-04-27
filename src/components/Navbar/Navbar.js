import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className='btn-div'>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div>
        </div>
        
    </div>
}

export default Navbar;