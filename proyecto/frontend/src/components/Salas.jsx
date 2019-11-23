import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, addToCart, addMoreProduct } from '../actions';

const Salas = (props) => {
  const { salas, cart } = props;
  //el guardaddo de nuestros favoritos

  const handleAddToCart = (product) => {
    const productIndex = cart.findIndex(item => product.id === item.id);
    if (productIndex >= 0) {
      props.addMoreProduct(product.id)
    } else {
      props.addToCart({ ...product, quantity: 1 });
    }
  };
  return (
    <>
      { salas.map(product => (
        <div className='producto-item' key={product.id}>
          <img className='producto-item__img' src={product.image} alt={product.title}/>
          <p className='producto-item__title'>{product.title}</p>
          <div className='producto-item__subtitle'>
            <p className='producto-item__subtitle--price'>{product.price}</p>
            <p className='producto-item__subtitle--sale'>{product.sale}</p>
          </div>
          <div className='producto-item__cart'>
              <div className='producto-item__cart--img'>
                <div className='icon icon-shopping-cart'> </div>
              </div>
              <button type='button' className='producto-item__cart--btn' onClick={() => handleAddToCart(product)}>Agregar al carrito</button>

          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    salas: state.salas,
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  setFavorite,
  addToCart,
  addMoreProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Salas);
