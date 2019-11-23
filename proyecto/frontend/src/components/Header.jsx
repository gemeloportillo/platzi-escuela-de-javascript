import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/images/icon-logotipo.svg';

const Header = () => (
  <div className='header'>
    <div className='logomini'>
      <div className='icon icon-icon-logo' />
    </div>
    <header className='image'>
      <div className='head'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
      </div>
    </header>
  </div>
);

export default Header;
