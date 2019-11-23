import React from 'react';
import '../assets/styles/iconos.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Icons = ({ cart }) => (
  <div id='iconsContainer' className='icons'>
    <Link to='/carrito'>
      <div className='icon icon-shopping-cart'>
        {cart.length> 0 &&
          <span id='icon-cart-count' className='icon-cart-count'>{cart.map(product => product.quantity).reduce((previousValue, currentValue) => previousValue + currentValue)}</span>
        }
      </div>
    </Link>
    <Link to='/login'>
      <div className='icon icon-icon-user' />
    </Link>
    <div className='icon icon-icon-swatch dark' />
    <div className='icon icon-icon-swatch light' />
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Icons);
