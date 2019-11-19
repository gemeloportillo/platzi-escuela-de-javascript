import React from 'react';
import '../assets/styles/components/footer.scss';

const Footer = () => (
  <footer>
    <div className='content'>
      <div className='flex-grid'>
        <div className='col'>
          <div className='logo'>
            <img className='img-logo' src='https://gemeloportillo.github.io/assets/images/icon-logotipo.svg' alt='' />
          </div>
          <ul>
            <li><a>¿Quiénes somos?</a></li>
            <li><a>Términos de Uso</a></li>
            <li><a>Legales</a></li>
            <li><a>Directorio</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
        <div className='col'>
          <h1>Servicio al cliente</h1>
          <ul>
            <li><a>Preguntas Frecuentes</a></li>
            <li><a>Contacto</a></li>
            <li><a>Formas de Pago</a></li>
            <li><a>Políticas de Privacidad</a></li>
            <li><a>Políticas de Envíos</a></li>
            <li><a>Devoluciones y Cancelaciones</a></li>
            <li><a>Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className='col map' />
      </div>
    </div>
  </footer>
);

export default Footer;
