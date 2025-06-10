import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import './ContraR.css';

const ContraR = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Enviando...',
      text: 'Procesando la solicitud de recuperación',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Aquí deberías hacer tu llamada al backend para enviar el enlace.
      // Simulando respuesta con un delay de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simula validación de correo (cambia por tu lógica real)
      const correoExiste = email === "correo@valido.com"; // cambia esto según tu lógica real

      Swal.close();

      if (correoExiste) {
        Swal.fire({
          icon: 'success',
          title: 'Enlace enviado',
          text: `Se ha enviado un enlace de recuperación a: ${email}`,
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Correo no encontrado',
          text: 'Este correo no está registrado. Por favor verifica o regístrate.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el enlace. Intenta más tarde.',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
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

      <div className='FontGeologica flex flex-col justify-center items-center gap-5 bg-[var(--Voscuro2)] w-120 h-auto rounded-4xl p-10'>
        <p id='FontCursive' className='text-4xl text-white'>Recuperar contraseña</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full items-center'>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white"
            placeholder="ejemplo@correo.com"
          />
          <button
            type="submit"
            className="rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white font-semibold group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95"
          >
            Enviar enlace de recuperación
          </button>
        </form>
        <p className='text-sm text-white text-center'>
          Recibirás un enlace en tu correo para restablecer tu contraseña.
        </p>
      </div>
    </section>
  );
};

export default ContraR;
