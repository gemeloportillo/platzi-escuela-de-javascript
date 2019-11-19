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
import '../assets/styles/home.scss';

const App = () => (
  <div className='App home'>
    <Search />
    <Icons />
    <Header />
    <Navbar />
    <main>
      <Breadcrumb />
      <Categories />
      <Product>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Product>
      <Categories />
      <Product>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Product>
      <Categories />
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
