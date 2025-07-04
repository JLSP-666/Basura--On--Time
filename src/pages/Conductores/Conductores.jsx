import { useState } from 'react';
import './Conductores.css';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import Swal from 'sweetalert2';

const Conductores = () => {
  const [conductores, setConductores] = useState([
    { nombre: 'Carlos', apellidos: 'Pérez López', telefono: '987654321', tipo_licencia: 'A2', fecha_vencimiento_licencia: '2025-12-31', estado: 'Inactivo', camion: 'AQH11F', email: 'brayitaxx123@gmail.com', password: 'aaaa' },
    { nombre: 'Ana', apellidos: 'Gómez Ruiz', telefono: '912345678', tipo_licencia: 'B1', fecha_vencimiento_licencia: '2026-08-15', estado: 'Inactivo', camion: 'AQH11F', email: 'brayitaxx123@gmail.com', password: 'aaaa' }
  ]);

  const [nuevoConductor, setNuevoConductor] = useState({
    nombre: '', apellidos: '', telefono: '', tipo_licencia: '', fecha_vencimiento_licencia: '', estado: 'Inactivo', camion: '', email: '', password: ''
  });

  const [modoEdicion, setModoEdicion] = useState(false);
  const [conductorEditarIndex, setConductorEditarIndex] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoConductor({ ...nuevoConductor, [name]: value });
  };

  const conductoresFiltrados = conductores.filter(conductor =>
    Object.values(conductor).some(valor =>
      valor.toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  const handleEliminar = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará al conductor.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A372D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizados = [...conductores];
        actualizados.splice(index, 1);
        setConductores(actualizados);
        Swal.fire('Eliminado', 'El conductor ha sido eliminado.', 'success');
      }
    });
  };

  const driveCancelDriver = () => {
    if (!modoEdicion) {
      setShowForm(false);
      resetForm();
      return;
    }
    Swal.fire({
      title: 'Procesando...', text: 'Estamos procesando tu solicitud',
      allowEscapeKey: false, allowOutsideClick: false, timer: 2000, timerProgressBar: true,
      didOpen: () => Swal.showLoading()
    });
    setTimeout(() => {
      Swal.fire({ title: 'Cancelación', text: "Se ha cancelado el ingreso/edición del conductor", icon: 'info', showConfirmButton: false, timer: 2000, timerProgressBar: true });
      setShowForm(false); resetForm(); setModoEdicion(false); setConductorEditarIndex(null);
    }, 2000);
  };

  const handleSubmitDriver = (e) => {
    e.preventDefault();
    const { nombre, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia, camion, email, password } = nuevoConductor;
    if (!nombre || !apellidos || !telefono || !tipo_licencia || !fecha_vencimiento_licencia || !camion || !email || !password) {
      Swal.fire({ title: 'Error', text: 'Todos los campos son obligatorios.', icon: 'warning', confirmButtonColor: '#0A372D' });
      return;
    }
    Swal.fire({ title: 'Procesando...', text: 'Estamos procesando tu solicitud', allowEscapeKey: false, allowOutsideClick: false, timer: 2000, timerProgressBar: true, didOpen: () => Swal.showLoading() });
    setTimeout(() => {
      if (modoEdicion) {
        const actualizados = [...conductores];
        actualizados[conductorEditarIndex] = nuevoConductor;
        setConductores(actualizados);
        setModoEdicion(false);
        setConductorEditarIndex(null);
      } else {
        setConductores([...conductores, nuevoConductor]);
        Swal.fire({ title: 'Conductor registrado', text: 'El conductor se ha agregado correctamente', icon: 'success', timer: 2000, showConfirmButton: false, timerProgressBar: true });
      }
      resetForm();
      setShowForm(false);
    }, 2000);
  };

  const resetForm = () => {
    setNuevoConductor({ nombre: '', apellidos: '', telefono: '', tipo_licencia: '', fecha_vencimiento_licencia: '', estado: 'Inactivo', camion: '', email: '', password: '' });
  };

  return (
    <section className="sectFirst min-h-screen flex flex-col md:flex-row bg-[var(--Voscuro2)]">

      {/* Header móvil */}
      <div className="md:hidden bg-[var(--Voscuro2)] w-full flex flex-col items-center pt-8 pb-5 fixed top-0 left-0 z-50">
        <div className="absolute top-2 left-2 z-50 scale-80">
          <ItemNavBar route="/PanelAdmin" content=" " />
        </div>
        <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-28 h-auto mt-2" />
        <p className="FontCursive text-3xl text-white mt-2">BASURA ON TIME</p>
      </div>

      {/* Logo lateral PC */}
      <div className="hidden md:flex flex-col justify-center items-center w-170 h-screen bg-[var(--Voscuro2)] fixed left-0 z-10">
        <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/PanelAdmin" content=" " />
        </div>
        <img className="ImgLogo" src={logoBasuraOnTime} alt="Logo Basura On Time" />
        <p className="FontCursive text-5xl text-center text-white">BASURA ON TIME</p>
      </div>

      {/* Contenido */}
      <div className="flex-1 flex flex-col items-center justify-start md:ml-[250px] px-4 pt-28 md:pt-6 pb-6 FontGeologica relative w-full overflow-y-auto">

        <div className="mt-35 sm:mt-10 sm:ml-100 bg-[var(--Voscuro2)] p-6 rounded-lg w-full max-w-[1000px]">
          <h1 className="text-3xl md:text-5xl text-white mb-6 text-center">Gestión de Conductores</h1>

          <div className="flex flex-col md:flex-row gap-5 sm:gap-77 mb-6">
            <button onClick={() => setShowForm(true)} className="group cursor-pointer rounded-md w-full md:w-40 h-12 bg-[var(--Vclaro3)] text-white text-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95">
              Agregar
            </button>
            <input
              type="text"
              className="text-white rounded-md border border-[var(--Vclaro3)] text-center w-full h-12 md:w-120 text-xl"
              placeholder="Buscar conductor..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="w-full text-white">

            {/* Cabecera */}
            <div className="hidden md:grid grid-cols-10 gap-2 text-center items-center text-lg rounded-t-md h-14 p-3 border border-[var(--Vclaro3)] bg-[var(--Voscuro4)]">
              <p>Nombre</p>
              <p>Apellidos</p>
              <p>Teléfono</p>
              <p>Licencia</p>
              <p>Vence</p>
              <p>Estado</p>
              <p>Camión</p>
              <p>email</p>
              <p>password</p>
              <p>Acción</p>
            </div>

            {conductoresFiltrados.map((conductor, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-10 gap-2 text-left md:text-center text-lg p-4 border border-[var(--Vclaro3)]">
                <div><span className="font-bold md:hidden">Nombre: </span>{conductor.nombre}</div>
                <div><span className="font-bold md:hidden">Apellidos: </span>{conductor.apellidos}</div>
                <div><span className="font-bold md:hidden">Teléfono: </span>{conductor.telefono}</div>
                <div><span className="font-bold md:hidden">Licencia: </span>{conductor.tipo_licencia}</div>
                <div><span className="font-bold md:hidden">Vencimiento: </span>{conductor.fecha_vencimiento_licencia}</div>
                <div><span className="font-bold md:hidden">Estado: </span>{conductor.estado}</div>
                <div><span className="font-bold md:hidden">Camión: </span>{conductor.camion}</div>
                <div className="flex item-center md:truncate md:max-w-[150px]" title={conductor.email}>
                  <span className="font-bold md:hidden">Email: </span>{conductor.email}
                </div>
                <div><span className="font-bold md:hidden">Password: </span>{conductor.password}</div>



                <div className="flex gap-2 md:justify-center justify-start mt-2 md:mt-0">
                  <button onClick={() => { setShowForm(true); setModoEdicion(true); setConductorEditarIndex(index); setNuevoConductor(conductor); }} className="flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white hover:scale-105">
                    <MdEdit />
                  </button>
                  <button onClick={() => handleEliminar(index)} className="flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white hover:scale-105">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <form onSubmit={handleSubmitDriver} className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg w-96 text-white flex flex-col gap-4">
            <h2 className="text-2xl mb-2">{modoEdicion ? 'Editar Conductor' : 'Agregar Conductor'}</h2>
            <input type="text" name="nombre" value={nuevoConductor.nombre} onChange={handleInputChange} placeholder="Nombre" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="text" name="apellidos" value={nuevoConductor.apellidos} onChange={handleInputChange} placeholder="Apellidos" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="text" name="telefono" value={nuevoConductor.telefono} onChange={handleInputChange} placeholder="Teléfono" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="text" name="tipo_licencia" value={nuevoConductor.tipo_licencia} onChange={handleInputChange} placeholder="Tipo de Licencia" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="date" name="fecha_vencimiento_licencia" value={nuevoConductor.fecha_vencimiento_licencia} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border" />
            <input type="text" name="camion" value={nuevoConductor.camion} onChange={handleInputChange} placeholder="Camión asignado" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="text" name="email" value={nuevoConductor.email} onChange={handleInputChange} placeholder="email" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <input type="text" name="password" value={nuevoConductor.password} onChange={handleInputChange} placeholder="password" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
            <div className="flex justify-end gap-4">
              <button type="button" onClick={driveCancelDriver} className="bg-[var(--Rojo)] px-4 py-2 rounded">Cancelar</button>
              <button type="submit" className="bg-[var(--Vclaro3)] px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Conductores;
