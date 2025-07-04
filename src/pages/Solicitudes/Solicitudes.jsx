import React, { useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import Swal from 'sweetalert2';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import './Solicitudes.css'; // Asegúrate de tener el CSS correspondiente

const Solicitudes = () => {
  // Estado inicial de solicitudes (puedes traerlo de API o DB)
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
    { id: 2, tipo: 'Residuo especial', solicitante: 'David Muñoz', fecha: '15/09/25', aceptada: false },
    { id: 3, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
    { id: 4, tipo: 'Residuo especial', solicitante: 'David Muñoz', fecha: '15/09/25', aceptada: false },
    { id: 5, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Función para aceptar solicitud
  const aceptarSolicitud = (id) => {
    Swal.fire({
      title: '¿Aceptar esta solicitud?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#0A372D',
    }).then((result) => {
      if (result.isConfirmed) {
        setSolicitudes(solicitudes.map(s =>
          s.id === id ? { ...s, aceptada: true } : s
        ));
        Swal.fire({
          icon: 'success',
          title: 'Solicitud aceptada',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  // Función para eliminar solicitud
  const eliminarSolicitud = (id) => {
    Swal.fire({
      title: '¿Eliminar esta solicitud?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#0A372D',
    }).then((result) => {
      if (result.isConfirmed) {
        setSolicitudes(solicitudes.filter(s => s.id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Solicitud eliminada',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  // Filtrar solicitudes con base en el texto de búsqueda
  const filteredSolicitudes = solicitudes.filter(s =>
    s.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.solicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.fecha.includes(searchTerm)
  );

  return (
    <section className='sectFirst'>
      <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0'>
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/PanelAdmin" content=" " />
        </div>
        <img className='ImgLogo' src={logoBasuraOnTime} alt="Logo Basura On Time" />
        <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
      </div >
      <div className='DivCamionSolicitudes gap-10 FontGeologica bg-[var(--Voscuro2)]'>
        <h1 className='text-5xl text-white text-left'>Gestión de Solicitudes</h1>
        <div className='flex justify-start w-180'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='ml-0 text-white rounded-md border-1 border-[var(--Vclaro3)] text-center h-15 w-100 text-xl'
            placeholder='Buscar solicitud...'
          />
        </div >
        <div className='text-white h-120 w-180'>
          <div className='flex justify-center items-center text-center rounded-t-md h-15 gap-20 text-lg border-1 border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
            <p>Id</p>
            <p>Tipo</p>
            <p>Solicitante</p>
            <p>Fecha</p>
            <p>Acciones</p>
          </div>

          {filteredSolicitudes.length === 0 ? (
            <p className='text-center text-white mt-5'>No hay solicitudes que coincidan.</p>
          ) : filteredSolicitudes.map(({ id, tipo, solicitante, fecha, aceptada }) => (
            <div
              key={id}
              className={`flex justify-center items-center text-center h-15 gap-12 border-1 border-[var(--Vclaro3)] text-lg
                          ${aceptada ? 'bg-[var(--Vclaro)] bg-opacity-40' : ''}`}
            >
              <div className="flex justify-center items-center gap-5 py-2">
                <p className="w-10">{id.toString().padStart(2, '0')}</p>
                <p className="w-32 break-words">{tipo}</p>
                <p className="w-40 break-words">{solicitante}</p>
                <p className="w-24">{fecha}</p>
              </div>

              <div className='flex flex-initial gap-2 justify-center items-center'>
                <button
                  disabled={aceptada}
                  onClick={() => aceptarSolicitud(id)}
                  className={`flex justify-center items-center rounded-md w-10 h-10
                    ${aceptada ? 'bg-[var(--Vclaro3)] cursor-not-allowed' : 'bg-[var(--Vclaro3)] hover:scale-105 hover:shadow-2xl hover:bg-opacity-90'}
                    text-white group cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}
                  title={aceptada ? 'Solicitud aceptada' : 'Aceptar solicitud'}
                >
                  <FcOk className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                </button>
                <button
                  disabled={aceptada}
                  onClick={() => eliminarSolicitud(id)}
                  className={`flex justify-center items-center rounded-md w-10 h-10
                  ${aceptada ? 'bg-[var(--Rojo)] cursor-not-allowed' : 'bg-[var(--Rojo)] hover:scale-105 hover:shadow-2xl hover:bg-opacity-90'}
                   text-white group cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}
                  title={aceptada ? 'No se puede eliminar una solicitud aceptada' : 'Eliminar solicitud'}
                >
                  <MdOutlineCancel className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solicitudes;
