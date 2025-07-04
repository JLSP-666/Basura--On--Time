import React, { useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import Swal from 'sweetalert2';
import ItemNavBar from '../../UI/ItemNavBar/ItemNavBar';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import './Solicitudes.css'; // Asegúrate de tener el CSS correspondiente

const Solicitudes = () => {

  const [solicitudes, setSolicitudes] = useState([
    { id: 1, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
    { id: 2, tipo: 'Residuo especial', solicitante: 'David Muñoz', fecha: '15/09/25', aceptada: false },
    { id: 3, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
    { id: 4, tipo: 'Residuo especial', solicitante: 'David Muñoz', fecha: '15/09/25', aceptada: false },
    { id: 5, tipo: 'Residuo especial', solicitante: 'Brayan Aguirre', fecha: '17/07/25', aceptada: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredSolicitudes = solicitudes.filter(s =>
    s.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.solicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.fecha.includes(searchTerm)
  );

  return (
    <section className="sectFirst min-h-screen flex flex-col md:flex-row bg-[var(--Voscuro2)]">

      {/* Sidebar PC */}
      <div className="hidden md:flex flex-col justify-center items-center w-170 h-screen bg-[var(--Voscuro2)] fixed left-0 z-10">
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/PanelAdmin" content=" " />
        </div>
        <img className="ImgLogo" src={logoBasuraOnTime} alt="Logo Basura On Time" />
        <p className="FontCursive text-5xl text-center text-white">BASURA ON TIME</p>
      </div>

      {/* Header móvil */}
      <div className="md:hidden bg-[var(--Voscuro2)] w-full flex flex-col items-center pt-8 pb-5 fixed top-0 left-0 z-50">
        <div className="absolute top-2 left-2 z-50 scale-80">
          <ItemNavBar route="/PanelAdmin" content=" " />
        </div>
        <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-28 h-auto mt-2" />
        <p className="FontCursive text-3xl text-white mt-2">BASURA ON TIME</p>
      </div>

      {/* Contenido */}
      <div className="flex-1 flex flex-col items-center justify-start md:ml-[250px] px-4 pt-28 md:pt-6 pb-6 FontGeologica relative w-full overflow-y-auto">

        <div className="mt-30 sm:mt-15 sm:ml-100 bg-[var(--Voscuro2)] p-6 rounded-lg w-full max-w-[800px] max-h-[70vh] overflow-y-auto overflow-x-hidden">
          <h1 className="text-3xl md:text-5xl text-white mb-6 text-center">Gestión de Solicitudes</h1>

          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-white rounded-md border border-[var(--Vclaro3)] text-center w-full h-12 md:w-120 text-xl"
              placeholder="Buscar solicitud..."
            />
          </div>

          <div className="w-full overflow-x-auto text-white">

            {/* Títulos solo escritorio */}
            <div className="hidden md:grid grid-cols-5 gap-2 text-center items-center text-lg rounded-t-md h-14 p-3 border border-[var(--Vclaro3)] bg-[var(--Voscuro4)] min-w-[600px]">
              <p>Id</p>
              <p>Tipo</p>
              <p>Solicitante</p>
              <p>Fecha</p>
              <p>Acciones</p>
            </div>

            {filteredSolicitudes.map(({ id, tipo, solicitante, fecha, aceptada }) => (
              <div key={id} className={`grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2 text-left md:text-center text-lg p-4 border border-[var(--Vclaro3)] min-w-[220px] md:min-w-0 ${aceptada ? 'bg-[var(--Vclaro)] bg-opacity-40' : ''}`}>

                <div>
                  <span className="font-bold md:hidden">Id: </span>{id.toString().padStart(2, '0')}
                </div>
                <div>
                  <span className="font-bold md:hidden">Tipo: </span>{tipo}
                </div>
                <div>
                  <span className="font-bold md:hidden">Solicitante: </span>{solicitante}
                </div>
                <div>
                  <span className="font-bold md:hidden">Fecha: </span>{fecha}
                </div>

                <div className="flex gap-2 md:justify-center justify-start mt-2 md:mt-0">
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
      </div>
    </section>
  );
};

export default Solicitudes;
