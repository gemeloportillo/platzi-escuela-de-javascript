import React from 'react';
import '../assets/styles/components/breadcrumb.scss';

const Breadcrumb = () => (
  <nav>
    <div className='breadcrumb'>
      <ul>
        <li><a href="/">Sala</a></li>
        <li><a href="/">Sillones</a></li>
        <li><a href="/">Sofas</a></li>
      </ul>
    </div>
  </nav>
);

export default Breadcrumb;
