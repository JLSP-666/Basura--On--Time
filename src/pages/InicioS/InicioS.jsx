import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './inicioS.css';

const XLanding = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/auth';
  const navigate = useNavigate();
  const [email, setCorreo] = useState('');
  const [password, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, { email, password });
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
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
        text: 'Verifica tus credenciales.',
        showConfirmButton: false,
      });
    }
  };

  return (
    <section className='sectFirst glass p-[50px] place-items-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/" content=" " />
        </div>
        <img className='img_logo' src={logoBasuraOnTime} alt="Logo" />
        <p id='FontCursive' className='text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>

      <div className='FontGeologica flex flex-col justify-center items-center gap-1 bg-[var(--Voscuro2)] w-120 h-110 rounded-4xl py-10 px-6'>
        <p id='FontCursive' className='text-5xl text-white mb-6'>Iniciar sesión</p>

        <input
          className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white mb-3'
          type="text"
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <div className="relative w-100 mb-3">
          <input
            className='rounded-md bg-[var(--Vclaro2)] w-full h-10 text-white placeholder:text-center text-center'
            type={showPassword ? "text" : "password"}
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setContraseña(e.target.value)}
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
          className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mb-3'
          onClick={handleLoginSubmit}
        >
          Iniciar sesión
        </button>

        <button
          className='rounded-md w-100 h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mb-4'
          onClick={() => navigate('/register')}
        >
          Crear cuenta
        </button>

        {/* Link para recuperar contraseña */}
        <button
          className='text-white underline text-sm hover:text-[var(--Vclaro)] transition cursor-pointer'
          onClick={() => navigate('/ContraR')}
          aria-label="Recuperar contraseña"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </section>
  );
};

export default XLanding;
