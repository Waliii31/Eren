import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Import your CSS file

const Featured = ({ heading, paragraph, products }) => {

  return (
    <section id='featured' className='featured'>
      {heading && <h1 className='heading'>{heading}</h1>}
      {paragraph && <p className='paragraph'>{paragraph}</p>}
      <div className='container'>
       <div className='featured-products'>
          {products.map((product, index) => (
            <div className='featured-product' key={index}>
              <div className='scale-image'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>{product.name}</h4>
                <a href="/"><i className="bi bi-bag"></i></a>
              </div>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Featured.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Featured;
