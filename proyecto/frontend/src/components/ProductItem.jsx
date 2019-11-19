import React from 'react';

const ProductItem = () => (
  <div className='producto-item'>
    <img className='producto-item__img' src='https://gemeloportillo.github.io/assets/images/pics/sm/item_image-0.jpg' alt='' />
    <p className='producto-item__title'>Mauris elementum. Lorem ipsum dolor.</p>
    <div className='producto-item__subtitle'>
      <p className='producto-item__subtitle--price'>$3,200</p>
      <p className='producto-item__subtitle--sale'>$1,000 </p>
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
