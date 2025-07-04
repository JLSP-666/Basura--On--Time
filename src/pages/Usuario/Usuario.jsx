import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { Pencil, Trash2, MapPin, Mail, User, Phone, Lock } from 'lucide-react';
import Swal from 'sweetalert2';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import Perfil from '../../assets/img/icons/perfil.jpg';
import { useNavigate } from 'react-router-dom';
import './Usuario.css';

const UserProfileApp = () => {
  const URL = 'http://localhost:10101/profile';
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState('Calle Falsa 123, Ciudad');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Por favor, inicia sesión primero.',
        timer: 2000,
        showConfirmButton: false,
        didClose: () => navigate('/InicioS')
      });
      return;
    }

    // Obtener datos del perfil
    axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        const { email, nombre, apellido, telefono, direccion } = res.data;
        setEmail(email);
        setNombre(nombre);
        setApellido(apellido);
        setTelefono(telefono);
        if (direccion) setDireccion(direccion);
      })
      .catch(err => {
        console.error('Error al obtener datos del perfil:', err);
      });
  }, [token, navigate]);

  const handleEliminarCuenta = () => {
    if (passwordConfirm.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Debes introducir tu contraseña',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    // Aquí enviarías una solicitud DELETE real al backend
    // axios.delete(`${URL}/delete`, { headers: { Authorization: `Bearer ${token}` }, data: { password: passwordConfirm } })

    setShowModal(false);
    setPasswordConfirm('');

    Swal.fire({
      icon: 'success',
      title: 'Cuenta eliminada correctamente',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleGuardarCambios = () => {
    // Aquí enviarías una solicitud PUT/PATCH real al backend
    const updatedData = {
      email,
      nombre,
      apellido,
      telefono: Telefono,
      direccion
    };

    axios.put(URL, updatedData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Información actualizada',
          timer: 2000,
          showConfirmButton: false,
        });
        setShowEditModal(false);
      })
      .catch(error => {
        console.error('Error al actualizar información:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar',
          text: 'Inténtalo más tarde',
        });
      });
  };

  return (
    <div className="min-h-screen bg-[var(--Voscuro)] p-8 flex justify-center">
      <div className="absolute top-4 left-4 z-50">
        <BotonBack route="/" content="<--" />
      </div>

      <div className="bg-[var(--Voscuro2)] rounded-4xl shadow-lg w-full max-w-7xl flex flex-col md:flex-row overflow-hidden">
        <div className="bg-[var(--Vclaro2)] flex flex-col items-center justify-center h-full md:w-1/3 text-center rounded-l-4xl border-r-2 border-[var(--Voscuro)] px-10">
          <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-40 mb-6" />
          <p className="FontCursive text-4xl text-white font-semibold">Basura On Time</p>
        </div>

        <div className="bg-white p-8 md:w-2/3 rounded-r-4xl flex flex-col gap-6 text-[var(--Voscuro)]">
          <div className="flex items-center gap-6 mb-6">
            <img src={Perfil} alt="Foto de perfil" className="w-28 h-28 rounded-full object-cover" />
            <h2 className="text-4xl font-bold">{nombre} {apellido}</h2>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <User size={22} /> Información Personal
            </h3>
            <button
              onClick={() => setShowEditModal(true)}
              className="rounded-md w-full max-w-[140px] h-10 bg-[var(--Vclaro)] text-white hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 font-semibold"
            >
              <Pencil size={18} /> Editar
            </button>
          </div>

          <div><label className="block text-sm font-medium text-gray-600 flex items-center gap-1"><Mail size={16} /> Correo</label><p className="mt-1 text-lg">{email}</p></div>
          <div><label className="block text-sm font-medium text-gray-600 flex items-center gap-1"><User size={16} /> Nombres</label><p className="mt-1 text-lg">{nombre}</p></div>
          <div><label className="block text-sm font-medium text-gray-600 flex items-center gap-1"><User size={16} /> Apellidos</label><p className="mt-1 text-lg">{apellido}</p></div>
          <div><label className="block text-sm font-medium text-gray-600 flex items-center gap-1"><Phone size={16} /> Teléfono</label><p className="mt-1 text-lg">{Telefono}</p></div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
              <MapPin size={16} /> Dirección
            </label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 mb-3 border rounded-lg text-[var(--Voscuro)]"
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

          <div><label className="block text-sm font-medium text-gray-600 flex items-center gap-1"><Lock size={16} /> Contraseña</label><p className="mt-1 text-lg">••••••••</p></div>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-md w-full h-10 bg-[var(--Rojo)] text-white hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 font-semibold mt-8"
          >
            <Trash2 size={22} /> Eliminar cuenta
          </button>
        </div>
      </div>

      {/* Modal Eliminar Cuenta */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg max-w-sm w-full text-center text-white space-y-4">
            <h3 className="text-xl font-semibold">¿Estás seguro?</h3>
            <p className="text-sm text-gray-300">Esta acción eliminará tu cuenta permanentemente.</p>

            <input
              type="password"
              placeholder="Introduce tu contraseña"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-[var(--Voscuro2)] text-white placeholder-gray-300"
            />

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPasswordConfirm('');
                  Swal.fire({
                    icon: 'error',
                    title: 'Operación cancelada',
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }}
                className="rounded-md w-full max-w-[120px] h-10 bg-[var(--Vclaro3)] text-white hover:scale-105 hover:shadow-lg transition-all font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarCuenta}
                disabled={!passwordConfirm.trim()}
                className={`rounded-md w-full max-w-[120px] h-10 text-white font-semibold transition-all duration-300 ${passwordConfirm.trim()
                  ? 'bg-[var(--Rojo)] hover:scale-105 hover:shadow-lg'
                  : 'bg-[var(--Rojo)] opacity-60 cursor-not-allowed'
                  }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar Información */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg max-w-md w-full text-white space-y-4">
            <h3 className="text-xl font-semibold text-center">Editar Información</h3>

            <div>
              <label className="block text-sm font-medium text-gray-300">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md bg-[var(--Voscuro2)] text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md bg-[var(--Voscuro2)] text-white"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md bg-[var(--Voscuro2)] text-white"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Teléfono</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md bg-[var(--Voscuro2)] text-white"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  Swal.fire({
                    icon: 'error',
                    title: 'Edición cancelada',
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }}
                className="bg-[var(--Rojo)] text-white px-4 py-2 rounded hover:scale-105 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardarCambios}
                className="bg-[var(--Vclaro3)] text-white px-4 py-2 rounded hover:scale-105 font-semibold"
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
