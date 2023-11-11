import React from 'react'
import asset18 from '../images/asset 18.jpeg'
import asset19 from '../images/asset 19.jpeg'



const Blogs = () => {
  return (
    <section className='blogs'>
        <h1 className='products-head text-center'>FEATURED PRODUCTS</h1>
        <p className='products-para text-center'>Claritas est etiam processus dynamicus, qui sequitur.</p>
      <div className='container'>
        <div className='blog'>
            <div className='blog-img'>
                <img src={asset18} alt="" />
            </div>
            <div className='blog-text'>
                <h3>27 <span>/APRIL</span></h3>
                <a className='cache-head' href="/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</a>
                <div className='under'></div>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum...</p>
                <a className='read-more' href="/">Read More</a>
            </div>
        </div>
        <div className='blog'>
            <div className='blog-img'>
                <img src={asset19} alt="" />
            </div>
            <div className='blog-text'>
                <h3>27 <span>/APRIL</span></h3>
                <a className='cache-head' href="/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</a>
                <div className='under'></div>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum...</p>
                <a className='read-more' href="/">Read More</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
