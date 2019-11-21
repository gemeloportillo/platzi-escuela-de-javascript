import React from 'react';
import '../assets/styles/components/register.scss';
import logotipoIcon from '../assets/static/images/icon-logotipo.svg';

const Register = () => (
  <section className='signup'>
    <section className='header'>
      <div className='logo'><img src={logotipoIcon} /></div>
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
          </label>
        </div>
      </form>
    </section>
  </section>

);

export default Register;
