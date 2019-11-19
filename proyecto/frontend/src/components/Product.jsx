import React from 'react';
import '../assets/styles/components/product.scss';

const Product = ({ children }) => (
  <section className='producto'>
    <div className='producto__container'>
      {children}
    </div>
  </section>
);

export default Product;
