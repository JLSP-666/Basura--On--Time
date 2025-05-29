import React, { useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import './Rutas.css';
import Swal from 'sweetalert2';

const Rutas = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: '¡PDF importado!',
          text: 'El documento se cargó correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      }, 500);
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

  return (
    <>
      <section className='sectFirst'>
        <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0'>
          <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
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
            <div>
              <embed src={pdfUrl} type="application/pdf" width="700" height="500" />
              <p className='text-white m-5'>Horario de recolección en las áreas públicas</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Rutas;
