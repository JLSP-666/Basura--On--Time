import React, { useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import "./Admin.css";

const Admin = () => {
  const URL = "https://express-latest-6gmf.onrender.com/authAdmin";
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    Swal.fire({
      title: 'Procesando...',
      text: 'Estamos procesando tu solicitud',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    const response = await axios.post(URL, { email, password });
    const token = response.data.token; 

    setTimeout(() => {
      if (token) {
        Swal.fire({
          title: 'Bienvenido',
          text: 'Has iniciado sesión correctamente',
          icon: 'success',
          showConfirmButton: false,
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
            localStorage.setItem('token', token);
            navigate('/PanelAdmin');
            setEmail('');
            setPassword('');
          }
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo',
          confirmButtonColor: '#0A372D',
        });
      }
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <section className='sectFirst glass p-[50px] place-items-center'>
      <div className='flex flex-col justify-center items-center'>
        <img className='Img-logo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>
      <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-100 rounded-4xl'>
        <p className='FontCursive text-5xl p-7 text-white'>Administrador</p>

        <input
          type="text"
          placeholder='Correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white'
        />

        {/* Input de contraseña con ícono de ojo */}
        <div className="relative w-100">
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='rounded-md bg-[var(--Vclaro2)] w-full h-10 text-white placeholder:text-center text-center'
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
          className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>
      </div>
    </section>
  );
};

export default Admin;
