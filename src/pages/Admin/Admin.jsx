import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import "./Admin.css"

const Admin = () => {
  const URL = 'http://localhost:10101/authAdmin';
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  let success = false;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    try {
      const response = axios.post(URL, {
        email,
        password
      }); 
      success = true;
      handleAlert();
    } catch (error) {
      success = false;
      handleAlert();
    }
  }
  const handleAlert = () => {
    
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
        })
    
    setTimeout(() => {
      
    if (success) {
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
          navigate('/PanelAdmin');
          setEmail('');
          setPassword('');
        }
      }
    )
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
  }

  return (
   <>
   <section className='sectFirst glass p-[50px] place-items-center'>
    <div className='flex flex-col justify-center items-center'>
         <img className='Img-logo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-6xl text-center text-white'>BASURA ON TIME</p>    
    </div>
    <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-100 rounded-4xl'>
        <p className='FontCursive text-5xl p-7 text-white'> Administrador</p>
        <input type="text" placeholder='Correo' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <input onChange={handleEmailChange} type="password" placeholder='Contraseña' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <button onChange={handlePasswordChange} className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95' onClick={handleLogin}> iniciar sesion </button>
    </div>
   </section>
   </>
  )
}

export default Admin
