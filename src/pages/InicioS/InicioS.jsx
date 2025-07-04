import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './InicioS.css';

const XLanding = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/auth';
  const navigate = useNavigate();
  const [email, setCorreo] = useState('');
  const [password, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const usuarioEmail = 'usuario@ejemplo.com';
    const usuarioPass = 'usuario123';

    if (email === usuarioEmail && password === usuarioPass) {
      localStorage.setItem('token', 'soyusuario');
      localStorage.setItem('rol', 'usuario');

      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate('/Usuario'));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales inválidas',
        text: 'Correo o contraseña incorrectos',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <section className='sectFirst glass min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:gap-20'>

      {/* Logo y texto */}
      <div className='flex flex-col justify-center items-center mb-6 md:mb-0'>
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/" content=" " />
        </div>
        <img className='w-24 h-24 mb-4 md:w-[200px] md:h-[200px]' src={logoBasuraOnTime} alt="Logo" />
        <p className='FontCursive text-4xl text-center text-white md:text-6xl'>BASURA ON TIME</p>
      </div>

      {/* Formulario */}
      <div className='FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-full p-6 rounded-3xl md:w-[480px] md:gap-4 md:rounded-4xl md:p-8'>

        <p className='FontCursive text-3xl p-4 text-white text-center md:text-5xl md:p-7'>Iniciar sesión</p>

        <input
          className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[500px] h-10 text-center placeholder:text-center text-white'
          type="text"
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <div className="relative w-full max-w-[500px]">
          <input
            className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-white placeholder:text-center text-center'
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
          className='rounded-md w-full max-w-[500px] h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
          onClick={handleLoginSubmit}
        >
          Iniciar sesión
        </button>

        <button
          className='rounded-md w-full max-w-[500px] h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
          onClick={() => navigate('/register')}
        >
          Crear cuenta
        </button>

        <button
          className='text-white underline text-sm hover:text-[var(--Vclaro)] transition cursor-pointer'
          onClick={() => navigate('/ContraR')}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </section>
  );
};

export default XLanding;



// const URL = 'http://localhost:10101/auth';
  // const navigate = useNavigate();
  // const [email, setCorreo] = useState('');
  // const [password, setContraseña] = useState('');
  // const [showPassword, setShowPassword] = useState(false);

  // const toggleShowPassword = () => setShowPassword(!showPassword);

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(URL, { email, password });
  //     const token = response.data.token;
  //     if (token) {
  //       localStorage.setItem('token', token);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Inicio de sesión exitoso',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       }).then(() => navigate('/'));
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error al iniciar sesión',
  //       text: 'Verifica tus credenciales.',
  //       showConfirmButton: false,
  //     });
  //   }
  // };