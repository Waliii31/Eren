import React, { useEffect } from 'react';
import asset8 from '../images/asset 8.jpeg'
import asset9 from '../images/asset 9.jpeg'
import asset10 from '../images/asset 10.jpeg'
import asset11 from '../images/asset 11.jpeg'

const Price = () => {
  useEffect(() => {
    const initCarousel = () => {
      const items = document.querySelectorAll('.carousel[data-bs-type="multi"] .carousel-item');
      items.forEach(item => {
        let next = item.nextElementSibling;
        if (!next) {
          next = item.parentElement.firstElementChild;
        }
        next.firstElementChild.cloneNode(true).classList.add('cloned').appendTo(item);

        for (let i = 0; i < 2; i++) {
          next = next.nextElementSibling;
          if (!next) {
            next = item.parentElement.firstElementChild;
          }
          next.firstElementChild.cloneNode(true).classList.add('cloned').appendTo(item);
        }
      });
    };

    initCarousel();
  }, []);

  return (
    <section className="products">
        <h1 className='products-head'>NEW ARRIVALS</h1>
        <p className='products-para'>Claritas est etiam processus dynamicus, qui sequitur.</p>
      <div className="products-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={asset8} alt="" />
            </div>
            <div className="flip-card-back">
                <h4 className="title">Sacrificial Chair design</h4>
                <h6>$ 200</h6>
                <a className="special-btn" href="/">Add to cart <i className="bi bi-bag"></i></a>
                <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={asset9} alt="" />
              <div className='new-arr'>New Arrival</div>
            </div>
            <div className="flip-card-back">
              <p className="title">Sacrificial Chair design</p>
                <h6>$ 200</h6>
                <a className="special-btn" href="/">Add to cart <i className="bi bi-bag"></i></a>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={asset10} alt="" />

            </div>
            <div className="flip-card-back">
              <p className="title">Sacrificial Chair design</p>
                <h6>$ 200</h6>
                <a className="special-btn" href="/">Add to cart <i className="bi bi-bag"></i></a>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={asset11} alt="" />

            </div>
            <div className="flip-card-back">
              <p className="title">Sacrificial Chair design</p>
              <h6>$ 200</h6>
              <a className="special-btn" href="/">Add to cart <i className="bi bi-bag"></i></a>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
