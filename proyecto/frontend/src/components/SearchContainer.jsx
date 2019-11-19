import React from 'react';
import '../assets/styles/SearchContainer.scss';
import '../assets/styles/general.scss';
import '../assets/styles/iconos.scss';

const SearchContainer = () => (
  <div id='searchContainer' className='search-container'>
    <form>
      <div className='icono'><div className='icon icon-magnifier-tool' /></div>
      <input type='text' placeholder='Busca tu mueble...' name='search' />
    </form>
  </div>
);

export default SearchContainer;

