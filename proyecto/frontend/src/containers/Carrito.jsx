import React from 'react';
import { connect } from 'react-redux';
import { reduceProduct, removeProduct, addMoreProduct } from '../actions';
import '../assets/styles/components/carrito.scss';
import foto from '../assets/static/images/muebles/salas/00.jpg';
import Search from '../components/Search';
import Icons from '../components/Icons';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const Carrito = (props) => {
  const { cart } = props;

  const handleAddMoreProduct = (id) => {
    props.addMoreProduct(id);
  };

  const handleRemoveProduct = (id) => {
    const productIndex = cart.findIndex(item => id===item.id);
    if(cart[productIndex].quantity>1) {
      props.reduceProduct(id);
    }else{
      props.removeProduct(id);
    }
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
  };

  return (
    <div className='carrito'>
      <Search />
      <Icons />

      <Navbar />
      <main>
        <Breadcrumb />
        <section className='section-cart'>
          <div className='grid-container'>
            <div>
              <h1>CARRITO DE COMPRAS</h1>
              <div className='cartlist'>
                <div className='cartlist_foto'>
                  <Link to='ProductDetail'><img src={foto} /></Link>
                </div>
                <div className='cartlist_desc'>
                  <h2 className='producto__titulo'>Sala esquinera izquierda Machaca - Gris claro</h2>
                  <p className='caracteristicas__resumen'>Sala esquinera fabricada con madera de pino 3/4, enresortado en forma de zigzag calibre 9, cuenta con hule espuma de 17 kg estándar con delcron laminado en descasabrazos y respaldo, hule espuma de 24 kg. estándar con delcron láminado en asientos. Ensamblado a base de grapa cementada y PBA.</p>
                  <p className='producto__precio'>$14,760</p>
                </div>
                <div className='quantity'>
                  <div className='name'><p>Cantidad:</p></div>
                  <div className='number'>
                    <div className='minus'><span>-</span></div>
                    <div className='cantidad'><span>2</span></div>
                    <div className='plus'><span>+</span></div>
                  </div>
                  <div className='delete'><span>X</span></div>
                </div>
              </div>
              <div className='cartlist'>
                <div className='cartlist_foto'>
                  <img src={foto} />
                </div>
                <div className='cartlist_desc'>
                  <h2 className='producto__titulo'>Sala esquinera izquierda Machaca - Gris claro</h2>
                  <p className='caracteristicas__resumen'>Sala esquinera fabricada con madera de pino 3/4, enresortado en forma de zigzag calibre 9, cuenta con hule espuma de 17 kg estándar con delcron laminado en descasabrazos y respaldo, hule espuma de 24 kg. estándar con delcron láminado en asientos. Ensamblado a base de grapa cementada y PBA.</p>
                  <p className='producto__precio'>$14,760</p>
                </div>
                <div className='quantity'>
                  <div className='name'>
                    <p>Cantidad:</p>
                  </div>
                  <div className='number'>
                    <div className='minus'>
                      <span>-</span>
                    </div>
                    <div className='cantidad'>
                      <span>20</span>
                    </div>
                    <div className='plus'>
                      <span>+</span>
                    </div>
                  </div>
                  <div className='delete'>
                    <span>X</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='order'>
              <h1>Resumen del pedido</h1>
              <div className='detail-order'>
                <div>Subtotal:</div>
                <div>$29,520</div>
                <div>Envio:</div>
                <div>$100</div>
                <div>Total:</div>
                <div>$29,620</div>
              </div>
              <div className='process-order'>
                <button type='button'>Procesar Compra</button>
              </div>
            </div>
          </div>
        </section>

        <Product />
        <Footer />
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  reduceProduct,
  removeProduct,
  addMoreProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
