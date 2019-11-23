import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import notfound from '../containers/NotFound';
import Layout from '../containers/Layout';
import ProductDetail from '../containers/ProductDetail';
import Carrito from '../containers/Carrito';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/productDetail' component={ProductDetail} />
        <Route exact path='/carrito' component={Carrito} />
        <Route component={notfound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
