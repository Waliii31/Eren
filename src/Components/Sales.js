import React from 'react'
import asset5 from '../images/asset 5.png'
import asset6 from '../images/asset 6.png'
import asset7 from '../images/asset 7.png'

const Sales = () => {
  return (
    <section className='sales'>
      <div className='slaes-container'>
        <a href='/' className='box'>
            <img src={asset5} alt="" />
            <div className='box-text'>
                <h2>ERENHOME DECO</h2>
                <p>Creative home deco ideal</p>
                <span>From: $167.00</span>
            </div>
        </a>
        <a href='/' className='box'>
        <img src={asset6} alt="" />
            <div className='box-text'>
                <h2>MEGA SALE OFF UP TO</h2>
                <p>Lamps & Lighting</p>
                <span>From: $167.00</span>
            </div>
        </a>
        <a href='/' className='box'>
        <img src={asset7} alt="" />
            <div className='box-text'>
                <h2>CREATIVE TABLE DESIGN</h2>
                <p>Creative home deco ideal</p>
                <span>From: $167.00</span>
            </div>
        </a>
      </div>
    </section>
  )
}

export default Sales
