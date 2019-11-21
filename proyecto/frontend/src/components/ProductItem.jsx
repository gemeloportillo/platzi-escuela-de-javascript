import React from 'react';

const ProductItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='producto-item'>
    <img className='producto-item__img' src={cover} alt={title} />
    <p className='producto-item__title'>{title}</p>
    <div className='producto-item__subtitle'>
      <p className='producto-item__subtitle--price'>{`${year} ${contentRating}`}</p>
      <p className='producto-item__subtitle--sale'>{duration}</p>
    </div>
    <div className='producto-item__cart'>
      <div>
        <div className='producto-item__cart--img'>
          <div className='icon icon-shopping-cart'> </div>
        </div>
        <button type='button' className='producto-item__cart--btn'>Agregar al carrito</button>
      </div>
    </div>
  </div>
);

export default ProductItem;
