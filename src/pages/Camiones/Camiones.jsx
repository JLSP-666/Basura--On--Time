import { useState, useEffect } from 'react';
import './Camiones.css';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import Swal from 'sweetalert2';
import axios from 'axios';

const Camiones = () => {
  const token = localStorage.getItem('token');
  const URLM = 'https://express-latest-6gmf.onrender.com/settingsTruck';
  const URLAdd = 'https://express-latest-6gmf.onrender.com/addTruck';
  const URLDelete = 'https://express-latest-6gmf.onrender.com/deleteTruck';
  const URLEdit = 'https://express-latest-6gmf.onrender.com/modifyTruck';

  const [modoEdicion, setModoEdicion] = useState(false);
  const [camionEditarIndex, setCamionEditarIndex] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [camiones, setCamiones] = useState([]);

  const [nuevoCamion, setNuevoCamion] = useState({
    placa: '',
    modelo: '',
    capacidad: 'Alta',
    estado_camion: 'Activo',
    marca: '',
    tipo_c: 'Recolección',
  });

  const resetForm = () => {
    setNuevoCamion({
      placa: '',
      modelo: '',
      capacidad: 'Alta',
      estado_camion: 'Activo',
      marca: '',
      tipo_c: 'Recolección',
    });
  };

  const mostrarCamiones = async () => {
    try {
      const response = await axios.get(URLM, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCamiones(response.data.data);
    } catch (error) {
      console.error('Error al obtener los camiones:', error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudieron cargar los camiones.',
        icon: 'error',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  useEffect(() => {
    mostrarCamiones();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCamion({ ...nuevoCamion, [name]: value });
  };

  const driveCancelTruck = () => {
    if (!modoEdicion) {
      setShowForm(false);
      resetForm();
      return;
    }

    Swal.fire({
      title: 'Procesando...',
      text: 'Estamos procesando tu solicitud',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading(),
    });

    setTimeout(() => {
      Swal.fire({
        title: 'Cancelado',
        text: 'Se ha cancelado la edición del camión.',
        icon: 'info',
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        setShowForm(false);
        resetForm();
        setModoEdicion(false);
        setCamionEditarIndex(null);
      });
    }, 2000);
  };

  const handleSubmitTruck = async (e) => {
    e.preventDefault();
    const { placa, modelo, capacidad, estado_camion, marca, tipo_c } = nuevoCamion;

    if (!placa || !modelo || !capacidad || !estado_camion || !marca || !tipo_c) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'warning',
        confirmButtonColor: '#0A372D',
      });
      return;
    }

    Swal.fire({
      title: 'Procesando...',
      text: modoEdicion ? 'Actualizando camión...' : 'Registrando camión...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      if (modoEdicion) {
        await axios.put(URLEdit, nuevoCamion, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: 'Camión actualizado',
          text: 'El camión ha sido actualizado correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } else {
        await axios.post(URLAdd, nuevoCamion, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: 'Camión registrado',
          text: 'El camión ha sido registrado correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }

      resetForm();
      setShowForm(false);
      setModoEdicion(false);
      setCamionEditarIndex(null);
      mostrarCamiones();

    } catch (error) {
      console.error("Error al guardar el camión:", error);
      let mensaje = 'Ocurrió un error inesperado.';
      if (error.response) {
        const { status, data } = error.response;
        if (data?.errorInfo) mensaje = data.errorInfo;
        else if (data?.message) mensaje = data.message;
        else if (status === 404) mensaje = 'Camión no encontrado.';
        else if (status === 500) mensaje = 'Error interno del servidor.';
      } else if (error.request) {
        mensaje = 'No se recibió respuesta del servidor.';
      } else {
        mensaje = error.message;
      }

      Swal.fire({
        title: 'Error',
        text: modoEdicion
          ? `No se pudo actualizar el camión: ${mensaje}`
          : `No se pudo registrar el camión: ${mensaje}`,
        icon: 'error',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  const handleEliminar = (index) => {
    const camion = camiones[index];
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el camión permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminando...',
          text: 'Estamos eliminando el camión',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        try {
          await axios.delete(URLDelete, {
            headers: { Authorization: `Bearer ${token}` },
            data: { placa: camion.placa },
          });

          Swal.fire({
            title: 'Camión eliminado',
            text: 'El camión ha sido eliminado correctamente',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true,
          });

          mostrarCamiones();
        } catch (error) {
          console.error('Error al eliminar el camión:', error);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo eliminar el camión. Intenta más tarde.',
            icon: 'error',
            confirmButtonColor: '#0A372D',
          });
        }
      }
    });
  };

  const camionesFiltrados = camiones.filter((camion) =>
    Object.values(camion).some((valor) =>
      valor?.toString().toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  // ... Tu JSX para el layout, tabla y formulario se mantiene igual ...
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

    {/* Título y barra superior */}
    <div className='DivCamion FontGeologica bg-[var(--Voscuro2)] ml-[250px] h-[calc(100vh-40px)] mt-5 overflow-y-auto p-5 relative'>
      <h1 className='text-5xl text-white mb-6'>Gestión de camiones</h1>

      <div className='flex flex-initial gap-30'>
        <button onClick={() => setShowForm(true)} className='group cursor-pointer rounded-md w-40 h-12 bg-[var(--Vclaro3)] text-white text-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>Agregar</button>
        <input
          type="text"
          className='text-white rounded-md border border-[var(--Vclaro3)] text-center w-120 text-xl'
          placeholder='Buscar camión...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-28 h-auto mt-2" />
      <p className="FontCursive text-3xl text-white mt-2">BASURA ON TIME</p>
    </div>

    {/* Contenido */}
    <div className="flex-1 flex flex-col items-center justify-start md:ml-[250px] px-4 pt-28 md:pt-6 pb-6 FontGeologica relative w-full overflow-y-auto">

      <div className="mt-30 sm:mt-15 sm:ml-100 bg-[var(--Voscuro2)] p-6 rounded-lg w-full max-w-[800px] max-h-[70vh] overflow-y-auto overflow-x-hidden">
        <h1 className="text-3xl md:text-5xl text-white mb-6 text-center">Gestión de camiones</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-6">
          <button onClick={() => setShowForm(true)} className="group cursor-pointer rounded-md w-full md:w-40 h-12 bg-[var(--Vclaro3)] text-white text-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95">
            Agregar
          </button>
          <input
            type="text"
            className="text-white rounded-md border border-[var(--Vclaro3)] text-center w-full h-12 md:w-120 text-xl"
            placeholder="Buscar camión..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="w-full overflow-x-auto text-white">

          {/* Encabezado tabla */}
          <div className="hidden md:grid grid-cols-7 gap-2 text-center items-center text-lg rounded-t-md h-14 p-3 border border-[var(--Vclaro3)] bg-[var(--Voscuro4)] min-w-[600px]">
            <p>Placa</p>
            <p>Modelo</p>
            <p>Capacidad</p>
            <p>Estado</p>
            <p>Tipo</p>
            <p>Marca</p>
            <p>Acción</p>
          </div>

          {/* Filas de camiones */}
          {camionesFiltrados.map((camion, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-2 text-left md:text-center text-lg p-4 border border-[var(--Vclaro3)] min-w-[220px] md:min-w-0">

              <div><span className="font-bold md:hidden">Placa: </span>{camion.placa}</div>
              <div><span className="font-bold md:hidden">Modelo: </span>{camion.modelo}</div>
              <div><span className="font-bold md:hidden">Capacidad: </span>{camion.capacidad}</div>
              <div><span className="font-bold md:hidden">Estado: </span>{camion.estado_camion}</div>
              <div><span className="font-bold md:hidden">Tipo: </span>{camion.tipo_c}</div>
              <div><span className="font-bold md:hidden">Marca: </span>{camion.marca}</div>

              <div className="flex gap-2 md:justify-center justify-start mt-2 md:mt-0">
                <button
                  onClick={() => {
                    setShowForm(true);
                    setModoEdicion(true);
                    setCamionEditarIndex(index);
                    setNuevoCamion(camion);
                  }}
                  className="flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white hover:scale-105"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleEliminar(index)}
                  className="flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white hover:scale-105"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Formulario modal */}
    {showForm && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <form onSubmit={handleSubmitTruck} className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg w-96 text-white flex flex-col gap-4">
          <h2 className="text-2xl mb-2">{modoEdicion ? 'Editar Camión' : 'Agregar Camión'}</h2>
          <input type="text" name="placa" value={nuevoCamion.placa} onChange={handleInputChange} placeholder="Placa" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
          <input type="text" name="modelo" value={nuevoCamion.modelo} onChange={handleInputChange} placeholder="Modelo" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
          <select name="capacidad" value={nuevoCamion.capacidad} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <select name="estado_camion" value={nuevoCamion.estado_camion} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Mantenimiento">Mantenimiento</option>
          </select>
          <select name="tipo_c" value={nuevoCamion.tipo_c} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
            <option value="Especial">Especial</option>
            <option value="Recolección">Recolección</option>
          </select>
          <input type="text" name="marca" value={nuevoCamion.marca} onChange={handleInputChange} placeholder="Marca" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
          <div className="flex justify-end gap-4">
            <button type="button" onClick={driveCancelTruck} className="bg-[var(--Rojo)] px-4 py-2 rounded">Cancelar</button>
            <button type="submit" className="bg-[var(--Vclaro3)] px-4 py-2 rounded">Guardar</button>
          </div>
        </form>
      </div>
    )}
  </section>
);

}


export default Camiones;
