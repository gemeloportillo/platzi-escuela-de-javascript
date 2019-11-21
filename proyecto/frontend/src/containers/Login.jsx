import React from 'react';
import '../assets/styles/components/login.scss';
import logotipoIcon from '../assets/static/images/icon-logotipo.svg';
import twitterIcon from '../assets/static/images/twitter-icon.png';
import googleIcon from '../assets/static/images/google-icon.png';

const Login = () => (
  <section className='login'>
    <section className='header'>
      <div className='logo'>
        <img src={logotipoIcon} />
      </div>
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
        <a href='/'>Regístrate</a>
      </p>
    </section>
    <section className='footer'>
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </section>
  </section>

);

export default Login;
