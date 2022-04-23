import React from 'react'
import about from '../../about.png'
import './about.css'

const About = () => {
    return <div className='about-body'>
        <div className='container'>
            <p className='bout'>— About Us</p>
            <h2>Our Short Story</h2>
            <div className='about-cont'>
                <div className='image'>
                    <img src={about} alt='about'></img>
                </div>
                <div className='bout-content'>
                    <h3>The 41-Eatery</h3>
                    <p>
                        The 41-Eatery Journey Started in 21st of April 2022. Incorporated As the 41-Eatery, Our First Outlet Opened To Diners On April 22nd. Our Restaurant Offers A Wide Variety Of Meals That Delivers An Original Taste Of Homemade Meals While Prioritizing Health Hygiene.  The Company Also plans to Operate four (4) Lounges To Complement The Operations Of The Restaurant In Those Locations. 41-Eatery Is Also Renowned For Its Exquisiteness as a luxury brand At The Flagship Outlet In Our location And We Are Perfecting Processes To Replicate The Experience In Other Outlets.
                    </p>
                    <button className='btn-light'>Go to Menu</button>

                </div>
            </div>
        </div>
    </div>
}

export default About;