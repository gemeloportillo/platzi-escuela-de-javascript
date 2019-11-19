import React from 'react';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/Navbar';
import Icons from '../components/Icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Product from '../components/Product';
import ProductItem from '../components/ProductItem';
import '../assets/styles/app.scss';
import '../assets/styles/components/home.scss';

const App = () => (
  <div className='App home'>
    <Search />
    <Icons />
    <Header />
    <Navbar />
    <main>
      <Breadcrumb />
      <Categories title='Salas' />
      <Product>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Product>
      <Categories title='Comedores' />
      <Product>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Product>
      <Categories title='Recámaras' />
      <Product>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Product>
      <Footer />
    </main>
  </div>
);

export default App;
