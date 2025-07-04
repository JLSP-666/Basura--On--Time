import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './InicioS.css';

const XLanding = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/auth';
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor ingresa tu correo y contraseña.',
        confirmButtonColor: '#0A372D',
      });
      return;
    }

    try {
      const { data } = await axios.post(URL, { email, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate('/'));
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: error.response?.data?.message || 'Verifica tus credenciales.',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  return (
    <section className='sectFirst glass p-[50px] place-items-center'>
      {/* Logo y encabezado */}
      <div className='flex flex-col justify-center items-center'>
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/" content=" " />
        </div>
        <img className='img_logo' src={logoBasuraOnTime} alt="Logo de Basura On Time" />
        <p id='FontCursive' className='text-6xl text-center text-white'>Basura On Time</p>
      </div>

      {/* Formulario de login */}
      <form onSubmit={handleLoginSubmit} className='FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-140 h-150 rounded-4xl py-10 px-6'>
        <p id='FontCursive' className='text-5xl text-white mb-6'>Iniciar sesión</p>

        <input
          className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white mb-3'
          type="email"
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative w-100 mb-3">
          <input
            className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-white placeholder:text-center text-center pr-10'
            type={showPassword ? "text" : "password"}
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mb-3'
        >
          Iniciar sesión
        </button>

        <button
          type="button"
          className='rounded-md w-100 h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mb-4'
          onClick={() => navigate('/register')}
        >
          Crear cuenta
        </button>

        <button
          type="button"
          className='text-white underline text-sm hover:text-[var(--Vclaro)] transition cursor-pointer'
          onClick={() => navigate('/ContraR')}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </section>
  );
};

export default XLanding;
