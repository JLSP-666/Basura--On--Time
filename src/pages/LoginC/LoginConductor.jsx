import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';

export default function LoginConductor() {
  const [loginData, setLoginData] = useState({
    correo: '',
    contraseña: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login exitoso
    console.log('Intentando iniciar sesión con:', loginData);

    // Aquí pondrías tu lógica real con axios y backend
    // Por ahora, guardamos token simulado y rol
    localStorage.setItem('token', 'TOKEN_EJEMPLO');
    localStorage.setItem('rol', 'conductor');

    // Redirige al panel del conductor
    navigate('/PanelC');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002015] relative">
      <div className="absolute top-4 left-4 z-50">
        <BotonBack route="/" content=" " />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-4">
        {/* Logo y título */}
        <div className="text-center">
          <img className="img_logo" src={logoBasuraOnTime} alt="Logo" />
          <p id="FontCursive" className="text-6xl text-center text-white">Basura On Time</p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#012b1d] p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl text-white font-bold italic text-center mb-6">
            Iniciar sesión
          </h2>

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={loginData.correo}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black"
            required
          />

          <div className="relative mb-4">
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={loginData.contraseña}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#e7f0fd] text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded mt-3 hover:bg-gray-900 font-semibold"
          >
            Crear cuenta
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-white underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
