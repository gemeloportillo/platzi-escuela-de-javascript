import React from 'react';
import '../assets/styles/search.scss';

const Search = () => (
  <div id='searchContainer' className='search-container'>
    <form>
      <div className='icono'><div className='icon icon-magnifier-tool' /></div>
      <input type='text' placeholder='Busca tu mueble...' name='search' />
    </form>
  </div>
);

export default Search;

