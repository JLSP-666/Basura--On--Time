import React, { useState } from 'react';
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';

const ContraR = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enlace de recuperación enviado a: ${email}`);
  };

  return (
    
    <div className="min-h-screen bg-[rgb(0,26,19)] flex items-center justify-center p-4">
        <div className="absolute top-4 left-4 z-50">
                <ItemNavBar route="/" content="<--" />
              </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-[rgb(0,50,37)] mb-6 text-center">
          Recuperar contraseña
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(204,238,80)] text-[rgb(0,50,37)]"
              placeholder="ejemplo@correo.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(204,238,80)] text-[rgb(0,50,37)] font-semibold py-2 rounded-lg hover:bg-lime-300 transition"
          >
            Enviar enlace de recuperación
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          Recibirás un enlace en tu correo para restablecer tu contraseña.
        </p>
      </div>
    </div>
  );
};

export default ContraR;
