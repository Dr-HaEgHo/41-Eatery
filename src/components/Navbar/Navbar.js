import React from 'react'
import {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


const Navbar = () => {

    // const [] = useState(showSide);

    const [open, setOpen] = useState(false)

    const sideBar = document.getElementById('saide');

    // function showSide (event) {
    //     sideBar.style.width = "140px";
    //     sideBar.style.padding = "1rem";
    //     console.log('we dey prezz for here')
    //     event.preventDefault();
    // }

    // function closeSide(event) {
    //     sideBar.style.width = "0px";
    //     sideBar.style.padding = "0rem";
    //     console.log('we dey prezz for here too')
    //     event.preventDefault();
    // }

 
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
                <div onClick={() => {setOpen(true)}}><Icon className='close-icon' icon="bx:menu" /></div>
            </div>
            <div className='btn-div'>
                <button className='btn-light'>Login</button>
                <button className='btn-dark'>Sign Up</button>
            </div> 
        </div>

        {/* ------------------------------------------------------------------------sidebar */}
        <div className={ open ? "side-bar-open" :"side-bar"}>
            <div onClick={() => {setOpen(false)}}><Icon className='close-icon' icon="ci:close-small" /></div>
            <ul className='side-links'>
                <li onClick={() => {setOpen(false)}}><Link to='/'> Home </Link></li>
                <li onClick={() => {setOpen(false)}}><Link to='/products'> Products </Link></li>
                <li onClick={() => {setOpen(false)}}><Link to='/contact'> Contact</Link></li>
                <li onClick={() => {setOpen(false)}}><Link to='/about'> About </Link></li>
            </ul>
      </div>
    </div>
}

export default Navbar;