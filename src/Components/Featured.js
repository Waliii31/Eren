import React from 'react'
import asset12 from '../images/asset 12.jpeg'
import asset13 from '../images/asset 13.jpeg'
import asset14 from '../images/asset 14.jpeg'
import asset15 from '../images/asset 15.jpeg'

const Featured = () => {
  return (
    <section className='featured'>
        <h1 className='products-head text-center'>FEATURED PRODUCTS</h1>
        <p className='products-para text-center'>Claritas est etiam processus dynamicus, qui sequitur.</p>
        <div className='container'>
            <div className='featured-products'>
            <div className='scale-image'>
                  <img src={asset12} alt="" />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Sacrificial Chair Design</h4>
                    <a href=""><i className="bi bi-bag"></i></a>
                </div>
                <p>$ 170.00</p>
            </div>
            <div className='featured-products'>
            <div className='scale-image'>
                  <img src={asset13} alt="" />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Sacrificial Chair Design</h4>
                    <a href=""><i className="bi bi-bag"></i></a>
                </div>
                <p>$ 170.00</p>
            </div>
            <div className='featured-products'>
            <div className='scale-image'>
                  <img src={asset14} alt="" />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Sacrificial Chair Design</h4>
                    <a href=""><i className="bi bi-bag"></i></a>
                </div>
                <p>$ 170.00</p>
            </div>
            <div className='featured-products'>
                <div className='scale-image'>
                  <img src={asset15} alt="" />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Sacrificial Chair Design</h4>
                    <a href=""><i className="bi bi-bag"></i></a>
                </div>
                <p>$ 170.00</p>
            </div>
        </div>
    </section>
  )
}

export default Featured
