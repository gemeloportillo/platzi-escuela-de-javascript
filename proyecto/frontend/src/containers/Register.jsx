import React from 'react';
import '../assets/styles/components/register.scss';
import logotipoIcon from '../assets/static/images/icon-logotipo.svg';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='signup'>
    <section className='header'>
      <Link to='/'> <div className='logo'><img src={logotipoIcon} /></div></Link>
    </section>
    <section className='signup__container'>
      <h2>Crea tu cuenta</h2>
      <form>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Apellidos' />
        <input className='input' type='email' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Completar registro</button>
        <div>
          <label>
            <input type='checkbox' id='cbox1' value='promos_checkbox' />
            Deseo recibir comunicaciones promocionales
          </label>
          <br/>
          <label>
            <input type='checkbox' id='cbox2' value='privacidad_checkbox' />
            Declaro que he leído y acepto la Política de Privacidad y los Términos y Condiciones de Uso
          </label><br/>

          <p className='login__container--register'>
        
        <Link to='/login'>Ya tengo una cuenta</Link>
      </p>
         
        </div>
      </form>
    </section>
  </section>

);

export default Register;
