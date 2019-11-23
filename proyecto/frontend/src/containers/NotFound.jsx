import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/notfound.scss';
import logotipoIcon from '../assets/static/images/icon-logotipo.svg';
import brokenGif from '../assets/static/images/broken.gif';

const notFound = () => (
  <section className='notfound'>
    <section className='header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logotipoIcon} />
        </div>
      </Link>
    </section>
    <section className='notfound__container'>
      <h2>¡Upsss sorry!</h2>
      <img src={brokenGif} />
      <h2>Algo se rompió aqui :(</h2>
    </section>
  </section>

);

export default notFound;
