import React from 'react';
import '../assets/styles/SearchContainer.scss';
import '../assets/styles/general.scss';
import '../assets/styles/iconos.scss';

const SearchContainer = () => (
  <div id='searchContainer' className='search-container'>
    <form action=''>
      <div className='icono'><div className='icon icon-magnifier-tool' /></div>
      <input type='text' placeholder='Busca tu mueble...' name='search' />
      <p>Este es un tipo de letra</p>
      <div data-icon='a' className='icon' />
    </form>
  </div>
);

export default SearchContainer;

