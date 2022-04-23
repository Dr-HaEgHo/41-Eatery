import React from 'react'
import dish from '../../dish.png'
import snack from '../../snack.png'
import vegetarian from '../../vegetarian.png'
import support from '../../customer-service.png'
import './home.css'
import About from '../About/About'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
    return <div className='home-body'>
        <div className='container hero'> 
            <div className='content'>
                <p className='rest'>— Restaurants</p>
                <h1>Enjoy Delicious Food at Popular Prices</h1>
                <p className='cont'>get a variety of foods full of tempting flavours and cheap prices for various groups</p>
                <button className='btn-dark shadow-orange'>Explore Now</button>
            </div>
            <div className='image'>
                <img src={dish} alt="dish"></img>
            </div>
        </div>

        {/* stats */}
        <div className='container section-1'>
            <div className='counts'>
                <div>
                <h2>1236+</h2>
                <p>Food</p>
            </div>
            <div>
                <h2>5000+</h2>
                <p>Deliveries</p>
            </div>
            <div>
                <h2>8000+</h2>
                <p>customers</p>
            </div>
            </div>
        </div>

        {/* features */}
        <div className='section-2'>
            <div className=' container features' >
                <p className='feat'>
                    — Features
                </p>
                <h2>Our Awesome Service</h2>
                <div className='feat-cont'>
                    <div>
                        <img src={snack} alt='features'></img>
                        <h3>Quality Food</h3>
                        <p>We prioritize food quality before delivering to you.</p>
                    </div>
                    <div>
                        <img src={vegetarian} alt='features'></img>
                        <h3>Super Taste</h3>
                        <p>We have special recipies that make our food taste very delicious.</p>
                    </div>
                    <div>
                        <img src={support} alt='features'></img>
                        <h3>Amazing Support</h3>
                        <p>We always got your back anytime you need us to fuel your stomachs.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* About */}
        {/* <About /> */}
        
        {/* Products */}
        {/* <Products /> */}
        
        {/* Contact */}
        {/* <Contact /> */}
        
        {/* Footer */}
        {/* <Footer/> */}
    </div>
}

export default Home;