import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/Navbar';
import Icons from '../components/Icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Salas from '../components/Salas';
import ProductItemC from '../components/ProductItemC';
import Recamaras from '../components/Recamaras';
import useScript from '../hooks/useScript';


//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/app.scss';
import '../assets/styles/components/home.scss';
import '../assets/styles/media.scss';

//este API ya no se usa porque ya lo tienes desde tu estado de Redux
//const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, products, salas, comedores, recamaras }) => {

  useScript('https://gemeloportillo.github.io/js/script.js');
  //const initialState = useInitialState(API);
  //console.log(initialState);
  return (
    <div className='App home'>
      <Search />
      <Icons />
      <Header />
      <Navbar />
      <main>
        <Breadcrumb />
        {mylist.length > 0 && 
            <Categories title='Mi carrito'>
              <Product>
              {mylist.map(item =>
              <ProductItem key={item.id} {...item}/>
              )}
              </Product>
            </Categories>
          }

        <Categories title='Salas' />
        <Product>
         
          <Salas />
        </Product>
        <Categories title='Comedores' />
        <Product>
          
          <ProductItemC />

        </Product>
        <Categories title='Recámaras' />
        <Product>
          <Recamaras />
        </Product>
        <Footer />
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    salas: state.salas,
    comedores: state.comedores,
    recamaras: state.recamaras,
    products: state.products,
    mylist: state.mylist,
  };
};

//export default connect(props, dispatchActions)
export default connect(mapStateToProps, null)(Home);
