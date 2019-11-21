import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/Navbar';
import Icons from '../components/Icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Product from '../components/Product';
import ProductItem from '../components/ProductItem';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/app.scss';
import '../assets/styles/components/home.scss';
import '../assets/styles/media.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {

  const initialState = useInitialState(API);
  console.log(initialState);
  return (
    <div className='App home'>
      <Search />
      <Icons />
      <Header />
      <Navbar />
      <main>
        <Breadcrumb />
        {initialState.mylist.length > 0 && 
          <Categories title='Mi Lista'>
            <Product>
              <ProductItem />
            </Product>
          </Categories>
        }

        <Categories title='Salas' />
        <Product>
          {initialState.salas.map(item => 
          <ProductItem key={item.id} {...item} /> 
          )}
        </Product>
        <Categories title='Comedores' />
        <Product>
          {initialState.comedores.map(item =>
          <ProductItem key={item.id} {...item} />
          )}
        </Product>
        <Categories title='Recámaras' />
        <Product>
          {initialState.recamaras.map(item =>
          <ProductItem key={item.id} {...item}/>
          )}
        </Product>
        <Footer />
      </main>
    </div>
  );
};
export default Home;
