import React from 'react';
import '../assets/styles/components/navbar.scss';

const Navbar = () => (
  <div id='navbar'>
    <div className='topnav' id='main-menu'>
      <span className='icon'><div className='icon icon-icon-pie' /></span>
      <a href="/">Sala</a>
      <a href="/">Comedor</a>
      <a href="/">Recamaras</a>
    </div>
  </div>
);

export default Navbar;
