import React from 'react';
import '../assets/styles/product.scss';

const Product = ({ children }) => (
  <section className='producto'>
    <div className='producto__container'>
      {children}
    </div>
  </section>
);

export default Product;
