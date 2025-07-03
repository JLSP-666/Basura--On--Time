import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';

export default function RegistroConductor() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    tipo_licencia: '',
    fecha_vencimiento_licencia: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aquí podrías usar Axios si tienes backend
      console.log('Datos enviados:', formData);

      // Simular respuesta exitosa
      setTimeout(() => {
        navigate('/'); // Redirige a Home
      }, 1000);
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002015] relative">
      {/* Botón volver */}
      <div className="absolute top-4 left-4">
        <BotonBack text="Volver" />
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-4">
        {/* Logo y nombre */}
        <div className="text-center">
          <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-64 mx-auto mb-6" />
          <h1 className="text-white text-4xl italic font-bold">Basura On Time</h1>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#012b1d] p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl text-white italic font-bold text-center mb-6">
            Registro de Conductor
          </h2>

          <input
            name="nombres"
            placeholder="Nombres"
            value={formData.nombres}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black placeholder-gray-600"
            required
          />

          <input
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black placeholder-gray-600"
            required
          />

          <input
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black placeholder-gray-600"
            required
          />

          <input
            name="tipo_licencia"
            placeholder="Tipo de Licencia"
            value={formData.tipo_licencia}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black placeholder-gray-600"
            required
          />

          <input
            type="date"
            name="fecha_vencimiento_licencia"
            value={formData.fecha_vencimiento_licencia}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold transition-all"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
