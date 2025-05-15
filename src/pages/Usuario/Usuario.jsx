import React, { useState } from 'react';
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';

const UserProfileApp = () => {
  const [direccion, setDireccion] = useState('Calle Falsa 123, Ciudad');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [nombre, setNombre] = useState('Juan Carlos');
  const [apellido, setApellido] = useState('Pérez Gómez');

  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleEliminarCuenta = () => {
    if (passwordConfirm.trim() === '') {
      alert('Por favor, introduce tu contraseña para confirmar.');
      return;
    }

    console.log('Cuenta eliminada');
    setShowModal(false);
    setPasswordConfirm('');
  };

  const handleGuardarCambios = () => {
    // Aquí se pueden enviar los datos al backend
    console.log('Datos actualizados:', { email, nombre, apellido });
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-[rgb(0,26,19)] p-8 flex justify-center">
      <ItemNavBar route='/'  />
      <div className="bg-white shadow-lg rounded-2xl w-3/4 max-w-9xl flex flex-col md:flex-row overflow-hidden">
       

        {/* Sidebar Perfil */}
        <div className="bg-[rgb(0,50,37)] border-black border-2 text-[rgb(204,238,80)] p-6 md:w-1/3 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Foto de perfil"
            className="w-29 h-28 rounded-full border-4 border-[rgb(204,238,80)]"
          />
          <h2 className="text-2xl font-bold mt-4">Usuario</h2>
          <p className="text-[rgb(114,175,71)]">{apellido}</p>
        </div>

        {/* Contenido principal */}
        <div className="p-6 w-full md:w-2/3 text-[rgb(0,50,37)] space-y-6 border-black border-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Información Personal</h2>
            <button
              onClick={() => setShowEditModal(true)}
              className="text-sm bg-[rgb(204,238,80)] text-[rgb(0,50,37)] px-3 py-1 rounded-full hover:bg-lime-300 transition font-medium"
            >
              Editar
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <p className="mt-1 text-lg">{email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Nombres</label>
            <p className="mt-1 text-lg">{nombre}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Apellidos</label>
            <p className="mt-1 text-lg">{apellido}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Dirección</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 mb-3 border rounded-lg text-[rgb(0,50,37)]"
              placeholder="Escribe tu dirección"
            />
            <div className="w-full h-48">
              <iframe
                title="Mapa de ubicación"
                width="100%"
                height="100%"
                className="rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Contraseña</label>
            <div className="flex items-center justify-between">
              <p className="mt-1 text-lg">••••••••</p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full transition"
            >
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>

      {/* Modal Confirmación de Eliminación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h3 className="text-xl font-semibold text-[rgb(0,50,37)]">¿Estás seguro?</h3>
            <p className="text-sm text-gray-600">Esta acción eliminará tu cuenta permanentemente.</p>

            <input
              type="password"
              placeholder="Introduce tu contraseña"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-[rgb(0,50,37)]"
            />

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPasswordConfirm('');
                }}
                className="bg-gray-200 px-4 py-2 rounded font-medium hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarCuenta}
                className={`px-4 py-2 rounded font-medium text-white ${
                  passwordConfirm ? 'bg-red-500 hover:bg-red-600' : 'bg-red-300 cursor-not-allowed'
                }`}
                disabled={!passwordConfirm}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edición */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
            <h3 className="text-xl font-semibold text-[rgb(0,50,37)] text-center">Editar Información</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md text-[rgb(0,50,37)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md text-[rgb(0,50,37)]"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md text-[rgb(0,50,37)]"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-200 px-4 py-2 rounded font-medium hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardarCambios}
                className="bg-green-500 text-white px-4 py-2 rounded font-medium hover:bg-green-600"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileApp;
