import React, { useState, useEffect } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import './Rutas.css';
import {BotonBack } from '../../UI/BotonBack/BotonBack';
import Swal from 'sweetalert2';

const Rutas = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const savedPdf = localStorage.getItem('pdfHorarioBOT');
    if (savedPdf) {
      setPdfUrl(savedPdf);
    }
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
    <>
      <section className='sectFirst'>
        <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0'>
          <div className="absolute top-4 left-4 z-50">
            <BotonBack route="/PanelAdmin" content=" " />
          </div>
          <img className='ImgLogo' src={logoBasuraOnTime} alt="Logo" />
          <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
        </div>

        <div className='DivPanelAdmin FontGeologica'>
          <button
            onClick={() => document.getElementById("pdfInput").click()}
            className='group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] 
                       rounded-2xl w-80 h-30 text-3xl gap-3
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
            Importar
          </button>

          <input
            type="file"
            id="pdfInput"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <p className='text-5xl text-white m-7'>Documentos recolección BOT</p>

          {pdfUrl && (
            <div className="flex flex-col items-center">
              <embed src={pdfUrl} type="application/pdf" width="700" height="500" className="rounded-xl shadow-lg" />
              <p className='text-white m-5'>Horario de recolección en las áreas públicas</p>
              <button
                onClick={handleDeletePdf}
                className="mt-4 text-white bg-red-600 px-6 py-2 rounded-xl text-lg hover:bg-red-700 transition-all"
              >
                Eliminar PDF
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Rutas;
