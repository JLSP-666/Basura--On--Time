import React, { useEffect, useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';

const RutasU = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isValidPdf, setIsValidPdf] = useState(false);

  useEffect(() => {
    const savedUrl = localStorage.getItem('pdfHorarioBOT');

    if (savedUrl) {
      // Verificar si el PDF se puede cargar (no está corrupto)
      fetch(savedUrl)
        .then(res => {
          if (res.ok && res.headers.get('Content-Type') === 'application/pdf') {
            setPdfUrl(savedUrl);
            setIsValidPdf(true);
          } else {
            setIsValidPdf(false);
          }
        })
        .catch(() => setIsValidPdf(false));
    }
  }, []);

  return (
    <>
      <section className='sectFirst'>
        <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0'>
          <div className="absolute top-4 left-4 z-50">
            <BotonBack route="/" content=" " />
          </div>
          <img className='ImgLogo' src={logoBasuraOnTime} alt="Logo Basura On Time" />
          <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
        </div>

        <div className='DivPanelAdmin FontGeologica'>
          <p className='text-5xl text-white m-7'>Horario recolección BOT</p>

          {isValidPdf ? (
            <div className='flex flex-col items-center'>
              <embed src={pdfUrl} type="application/pdf" width="700" height="500" className="rounded-xl shadow-lg" />
              <p className='text-white m-5'>Horario de recolección en las áreas públicas</p>
            </div>
          ) : (
            <p className='text-white text-2xl mt-10'>Aún no se ha cargado ningún documento válido.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default RutasU;
