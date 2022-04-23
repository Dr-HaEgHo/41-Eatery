import React from 'react'
import './products.css'
import meatball from '../../meatball.jpg'
import pizza from '../../pizza.jpg'
import spag from '../../spag.jpg'

const Products = () => {
  return (
      <div className='prod-body'>
          <div className='container product'>
              <p className='prod'>— Products</p>
              <h2>Top Products</h2>
              <p>these are various food menus that are highly purchased by our customers</p>
              <div className='menu-div'>
                  <div className='menus'>
                      <div className='pic'>
                          <img src={meatball} alt='foods'></img>
                      </div>
                      <div className='menu-cont'>
                          <h4>Meat Balls</h4>
                          <p>Lean ground beef, ground pork, bread crumbs, parmesan cheese, olive oil</p>
                          <div className='price'>
                              <div className='counter'>
                                  <p>-</p>
                                  <p>0</p>
                                  <p className='red'>+</p>
                              </div>
                              <div className='num-cart'>
                                  <p>$30</p>
                                  <span role='img' aria-hidden='true'>🛒</span>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='menus'>
                      <div className='pic pizza'>
                          <img src={pizza} alt='foods'></img>
                      </div>
                      <div className='menu-cont'>
                          <h4>Pizza</h4>
                          <p>Lean ground beef, ground pork, bread crumbs, parmesan cheese, olive oil</p>
                          <div className='price'>
                              <div className='counter'>
                                  <p>-</p>
                                  <p>0</p>
                                  <p className='red'>+</p>
                              </div>
                              <div className='num-cart'>
                                  <p>$30</p>
                                  <p>🛒</p>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='menus'>
                      <div className='pic'>
                          <img src={spag} alt='foods'></img>
                      </div>
                      <div className='menu-cont'>
                          <h4>Spaghetti</h4>
                          <p>Lean ground beef, ground pork, bread crumbs, parmesan cheese, olive oil</p>
                          <div className='price'>
                              <div className='counter'>
                                  <p>-</p>
                                  <p>0</p>
                                  <p className='red'>+</p>
                              </div>
                              <div className='num-cart'>
                                  <p>$30</p>
                                  <p>🛒</p>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <button className='btn-dark shadow-orange'>Explore Our Items</button>
          </div>
    </div>
  )
}

export default Products;