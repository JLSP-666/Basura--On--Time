import React, { useState } from 'react';
import ItemNavBar from '../../UI/ItemNavBar/ItemNavBar';
import Swal from 'sweetalert2';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import "./Register.css";

const Register = () => {
  let success = false;
  const URL = 'http://localhost:10101/register';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setNombres(e.target.value);
  const handleLastNameChange = (e) => setApellidos(e.target.value);
  const handlePhoneChange = (e) => setTelefono(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const registerData = async () => {
    try {
      const response = await axios.post(URL, {
        email,
        password,
        nombres,
        apellidos,
        telefono
      });

      Swal.fire({
        title: 'Bienvenido a Basura on time',
        text: 'Te has registrado con éxito',
        icon: 'success',
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true
      }).then(() => {
        navigate('/');
      });

      return response.data;

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo completar el registro',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#0A372D',
        timer: 2000,
        timerProgressBar: true
      });
    }
  };

  const handleGuardarDireccion = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      Swal.fire({
        icon: 'success',
        title: 'Dirección guardada',
        text: 'La dirección se guardó correctamente.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la dirección.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <>
      <section className='sectFirst glass min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:gap-20'>

        {/* Logo y texto */}
        <div className='flex flex-col justify-center items-center mb-6 md:mb-0'>
          <div className="absolute top-4 left-4 z-50">
            <ItemNavBar route="/" content=" " />
          </div>
          <img className='img_logo' src={logoBasuraOnTime} alt="" />
          <p id='FontCursive' className='text-6xl text-center text-white'>BASURA ON TIME</p>
        </div>

        {/* Formulario */}
        <div className='FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-full p-6 rounded-3xl md:w-[480px] md:gap-4 md:rounded-4xl md:p-8'>

          <p className='FontCursive text-3xl p-4 text-white text-center md:text-5xl md:p-7'>Registro</p>

          <input
            onChange={handleNameChange}
            className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[750px] h-10 text-center placeholder:text-center text-white'
            type="text"
            placeholder='Nombres'
          />
          <input
            onChange={handleLastNameChange}
            className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[750px] h-10 text-center placeholder:text-center text-white'
            type="text"
            placeholder='Apellidos'
          />
          <input
            onChange={handleEmailChange}
            className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[750px] h-10 text-center placeholder:text-center text-white'
            type="text"
            placeholder='Correo electrónico'
          />
          <input
            onChange={handlePhoneChange}
            className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[750px] h-10 text-center placeholder:text-center text-white'
            type="text"
            placeholder='Número de teléfono'
          />

          <div className="relative w-full max-w-[750px]">
            <input
              onChange={handlePasswordChange}
              className='rounded-md bg-[var(--Vclaro2)] w-full h-10 text-white placeholder:text-center text-center'
              type={showPassword ? "text" : "password"}
              placeholder='Contraseña'
              value={password}
            />
            <button
              onClick={toggleShowPassword}
              type="button"
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
            className='rounded-md w-full max-w-[750px] h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
            onClick={registerData}
          >
            Registrarse
          </button>

          <button
            className='rounded-md w-full max-w-[750px] h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
            onClick={handleGuardarDireccion}
          >
            Guardar Dirección
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
