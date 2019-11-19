import React from 'react';
import '../assets/styles/iconos.scss';

const Icons = () => (
  <div id='iconsContainer' className='icons'>
    <div className='icon icon-shopping-cart'>
      <span id='icon-cart-count' className='icon-cart-count'>10</span>
    </div>
    <div className='icon icon-icon-user' />
    <div className='icon icon-icon-swatch dark' />
    <div className='icon icon-icon-swatch light' />
  </div>
);

export default Icons;
