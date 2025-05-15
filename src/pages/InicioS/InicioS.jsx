import React, { useState } from 'react';
import Logo from '../../UI/logo/Logo';
import '../InicioS/InicioS.css';
import DividerB from '../../UI/dividerB/DividerB';
import PageWrapper from '../../UI/sas/sas';
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';

const XLanding = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = { correo, contraseña };
    console.log('Datos de inicio de sesión:', formData);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const formData = { correo, contraseña };
    console.log('Datos para crear cuenta:', formData);
  };

  return (
    <PageWrapper>
      <div className="relative flex justify-center items-center h-screen bg-gradient-to-r bg-[rgb(0,26,19)]">
        {/* Botón de volver arriba a la izquierda */}
        <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content="<--" />
        </div>

        {/* Panel de Glassmorphism */}
        <div className="w-full max-w-md p-8 space-y-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg">
          <div className="flex flex-col items-center">
            <Logo />

            <h1 className="text-4xl text-center font-bold text-white mb-6">
              Bienvenido a un lugar <br /> más limpio
            </h1>

            <DividerB />

            <div className="flex flex-col items-center space-y-4 w-full">
              <input
                className="w-full h-12 px-4 rounded-xl bg-white/70 text-center placeholder:text-center text-gray-800"
                type="text"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <input
                className="w-full h-12 px-4 rounded-xl bg-white/70 text-center placeholder:text-center text-gray-800"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>

            <DividerB />

            <div className="flex flex-col gap-4 w-full">
              <button
                className="w-full py-2 border border-gray-300 text-green-500 font-bold rounded-full hover:bg-gray-100 transition"
                onClick={handleLoginSubmit}
              >
                Iniciar sesión
              </button>
              <button
                className="w-full py-2 bg-green-400 hover:bg-green-900 text-white font-bold rounded-full transition"
                onClick={handleSignUpSubmit}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default XLanding;