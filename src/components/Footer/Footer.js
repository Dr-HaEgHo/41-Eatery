import React from 'react'
import './footer.css'


function Footer() {
  return (
      <div className='footer-body'>
          <div className='container'>
              <div className='footer'>
                <div className='footer-logo'>
                    <p>41-eatery</p>
                  </div>
                  <div className='links'>
                      <ul>
                          <li><a href='/#'>About</a></li>
                          <li><a href='/#'>Home</a></li>
                          <li><a href='/#'>Contact</a></li>
                          <li><a href='/#'>Products</a></li>
                      </ul>
                  </div>
                  <div className='details'>
                      <ul>
                           <li><a href='/#'>Tel : +234-812-345-6789</a></li>
                          <li><a href='/#'>Email : support@41-Eatery.com</a></li>
                          <li><a href='/#'>Instagram : @41-Eatery</a></li>
                      </ul>
                  </div>
              </div>
          </div>
              <div className='copy'>
                    <p>Capstone Project Trial by Awogbuyi Timothy</p>
              </div>
      </div>
      
  )
}

export default Footer;