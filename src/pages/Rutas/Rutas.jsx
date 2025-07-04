import React, { useState, useEffect } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import './Rutas.css';
import Swal from 'sweetalert2';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar'; // Asegúrate de tener esta ruta correcta

const Rutas = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const savedPdf = localStorage.getItem('pdfHorarioBOT');
    if (savedPdf) setPdfUrl(savedPdf);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Pdf = reader.result;
        setPdfUrl(base64Pdf);
        localStorage.setItem('pdfHorarioBOT', base64Pdf);
        Swal.fire({
          icon: 'success',
          title: '¡PDF importado!',
          text: 'El documento se cargó correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      };
      reader.readAsDataURL(file);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Archivo no válido',
        text: 'Por favor selecciona un PDF válido.',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const handleDeletePdf = () => {
    Swal.fire({
      title: '¿Eliminar PDF?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('pdfHorarioBOT');
        setPdfUrl(null);
        Swal.fire({
          icon: 'success',
          title: 'PDF eliminado',
          text: 'El documento fue eliminado correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  };

  return (
    <section className='sectFirst flex'>
      {/* Panel lateral izquierdo */}
      <div className='min-h-screen w-72 flex flex-col justify-center items-center bg-[var(--Voscuro2)] fixed left-0 top-0 z-10'>
        <div className="absolute top-4 left-4">
          <ItemNavBar route="/PanelAdmin" content=" " />
        </div>
        <img className='ImgLogo' src={logoBasuraOnTime} alt="Logo" />
        <p className='FontCursive text-4xl text-white text-center mt-4'>BASURA ON TIME</p>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 ml-72 p-8 pt-24 w-full min-h-screen overflow-y-auto FontGeologica">
        <h1 className="text-3xl md:text-5xl text-white mb-6 text-center">Documentos de recolección BOT</h1>

        <button
          onClick={() => document.getElementById("pdfInput").click()}
          className="group cursor-pointer flex justify-center items-center text-white bg-[var(--Voscuro2)] rounded-2xl px-6 py-2 text-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95 mb-8 mx-auto"
        >
          Importar PDF
        </button>

        <input
          type="file"
          id="pdfInput"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {pdfUrl ? (
          <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">
            <div className="w-full h-auto rounded-xl shadow-lg overflow-hidden">
              <embed src={pdfUrl} type="application/pdf" width="100%" height="500px" className="rounded-xl" />
            </div>
            <p className="text-white mt-5 text-center">Horario de recolección en las áreas públicas</p>
            <button
              onClick={handleDeletePdf}
              className="group cursor-pointer mt-4 text-white bg-red-600 px-6 py-2 rounded-xl text-lg hover:bg-red-700 transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Eliminar PDF
            </button>
          </div>
        ) : (
          <p className="text-white text-lg mt-6 text-center">No hay documentos cargados.</p>
        )}
      </div>
    </section>
  );
};

export default Rutas;
