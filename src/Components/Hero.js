import React from 'react'
import asset3 from '../images/asset 3.png'

const Hero = () => {
  return (
    <header className='hero-section'>
        <div className='container'>
            <div className='hero-text'>
                <h5 className='animate__delay-1s animate__animated animate__fadeInDown'>NEW ARRIVALS</h5>
                <h1 className='animate__delay-1s animate__animated animate__fadeInDown'>NEW STYLES</h1>
                <h2 className='animate__delay-2s animate__animated animate__fadeInDown'>FOR LAMPS</h2>
                <p className='animate__delay-3s animate__animated animate__fadeInDown'>Claritas est stiam processues dynamicus, qui sequiter mutaridum concedium lectrum.</p>
                <a className='animate__delay-3s animate__animated animate__fadeInDown' href="/">Shop Now</a>
            </div>
            <div className='hero-image animate__delay-4s animate__animated animate__backInRight'>
                <img src={asset3} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Hero
