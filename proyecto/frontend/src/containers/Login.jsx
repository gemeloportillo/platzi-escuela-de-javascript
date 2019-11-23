import React from 'react';
import '../assets/styles/components/login.scss';
import logotipoIcon from '../assets/static/images/icon-logotipo.svg';
import twitterIcon from '../assets/static/images/twitter-icon.png';
import googleIcon from '../assets/static/images/google-icon.png';
import { Link } from 'react-router-dom';

const Login = () => (
  <section className='login'>
    <section className='header'>
      <Link to='/'>
      <div className='logo'>
        <img src={logotipoIcon} />
      </div>
      </Link>
    </section>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} /> 
            Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} /> 
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/signup'>Regístrate</Link>
      </p>
    </section>
    <section className='footer'>
      <Link to='/ups'>Terminos de uso</Link>
      <Link to='/'>Declaración de privacidad</Link>
      <Link to='/'>Centro de ayuda</Link>
    </section>
  </section>

);

export default Login;
