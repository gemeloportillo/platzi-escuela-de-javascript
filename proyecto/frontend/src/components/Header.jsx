import React from 'react';
import '../assets/styles/header.scss';

const Header = () => (
  <div>
    <div className='logomini'>
      <div className='icon icon-icon-logo' />
    </div>
    <header className='image'>
      <div className='head'>
        <div className='logo'>
          <img src='https://gemeloportillo.github.io/assets/images/icon-logotipo.svg' alt='' />
        </div>
      </div>
    </header>
  </div>
);

export default Header;
