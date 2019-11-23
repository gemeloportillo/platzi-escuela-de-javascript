import React from 'react';
import '../assets/styles/components/footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className='content'>
      <div className='flex-grid'>
        <div className='col'>
          <div className='logo'>
            <Link to='/'><img className='img-logo' src='https://gemeloportillo.github.io/assets/images/icon-logotipo.svg' alt='' /></Link>
          </div>
          <ul>
            <li><Link to='/'>¿Quiénes somos?</Link></li>
            <li><Link to='/'>Términos de Uso</Link></li>
            <li><Link to='/'>Legales</Link></li>
            <li><Link to='/'>Directorio</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </div>
        <div className='col'>
          <h1>Servicio al cliente</h1>
          <ul>
            <li><Link to='/'>Preguntas Frecuentes</Link></li>
            <li><Link to='/'>Contacto</Link></li>
            <li><Link to='/'>Formas de Pago</Link></li>
            <li><Link to='/'>Políticas de Privacidad</Link></li>
            <li><Link to='/'>Políticas de Envíos</Link></li>
            <li><Link to='/'>Devoluciones y Cancelaciones</Link></li>
            <li><Link to='/'>Términos y Condiciones</Link></li>
          </ul>
        </div>
        <div className='col map' />
      </div>
    </div>
  </footer>
);

export default Footer;
