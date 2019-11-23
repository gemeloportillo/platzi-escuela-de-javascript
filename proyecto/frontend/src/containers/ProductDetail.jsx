import React from 'react';
import '../assets/styles/components/productDetail.scss';
import foto from '../assets/static/images/muebles/salas/00.jpg';
import Search from '../components/Search';
import Icons from '../components/Icons';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const ProductDetail = () => (
  <div className='product_page'>
    <Search />
    <Icons />

    <Navbar />
    <main>
      <Breadcrumb />
      <section>
        <div className='grid-container'>
          <div className='foto'>
            <img src={foto}/>
          </div>
          <div className='caracteristicas'>
            <h1 className='producto__titulo'>Sala esquinera izquierda Machaca - Gris claro</h1>
            <p className='producto__precio'>$14,760</p>
            <h1 className='caracteristicas__titulo'>Características</h1>
            <p className='caracteristicas__resumen'>Sala esquinera fabricada con madera de pino 3/4, enresortado en forma de zigzag calibre 9, cuenta con hule espuma de 17 kg estándar con delcron laminado en descasabrazos y respaldo, hule espuma de 24 kg. estándar con delcron láminado en asientos. Ensamblado a base de grapa cementada y PBA.</p> 
            <div className='addcart'><Link to='/carrito'><button type='button'>Agregar al carrito</button></Link></div>
          </div>
          <div className='descripcion'>
            <h1 className='descripcion__titulo'>Descripción</h1>
            <div className='descripcion__resumen'>
              <p>Esta pieza es la representación perfecta de estilo y comodidad. La elegancia y buen gusto se reflejan en cada rincón de tu hogar, una representación idónea de ello es este formidable sala. Gracias a su suave textura se convierte en el integrante perfecto para complementar tu decoración. Déjate consentir por su comodidad y dale una nueva cara a tu espacio..</p> 
            </div>
          </div>
        </div>
      </section>
      <Product />
      <Footer />
    </main>
  </div>
);

export default ProductDetail;
