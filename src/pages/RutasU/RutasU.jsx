import React, { useEffect, useState } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import ItemNavBar from '../../UI/ItemNavBar/ItemNavBar';


const RutasU = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isValidPdf, setIsValidPdf] = useState(false);

  useEffect(() => {
    const savedUrl = localStorage.getItem('pdfHorarioBOT');
    if (savedUrl) {
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
      <section className="sectFirst min-h-screen flex flex-col md:flex-row">

        {/* LATERAL PC */}
        <div className="hidden md:flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0 ">
          <div className="absolute top-4 left-4 z-50">
            <BotonBack route="/" content=" " />
          </div>
          <img className="ImgLogo" src={logoBasuraOnTime} alt="Logo Basura On Time" />
          <p className="FontCursive text-5xl text-center text-white">BASURA ON TIME</p>
        </div>

        {/* HEADER MOVIL */}
        <div className="md:hidden bg-[var(--Voscuro2)] w-full flex flex-col items-center pt-12 pb-4 relative">
          <div className="absolute top-2 left-2 scale-75">
            <ItemNavBar route="/" content=" " />
          </div>
          <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-28 h-auto mt-2" />
          <p className="FontCursive text-3xl text-white mt-2">BASURA ON TIME</p>
        </div>

        {/* CONTENIDO DERECHO */}
        <div className="flex-1 flex flex-col items-center justify-start md:ml-180 px-4 py-6 FontGeologica">
          <p className="text-3xl md:text-5xl text-white mb-6 text-center">Horario recolección BOT</p>

          {isValidPdf ? (
            <div className="flex flex-col items-center w-full">
              <embed
                src={pdfUrl}
                type="application/pdf"
                className="w-full h-[350px] md:h-[500px] md:w-[700px] rounded-xl shadow-lg"
              />
              <p className="text-white mt-4">Horario de recolección en las áreas públicas</p>
            </div>
          ) : (
            <p className="text-white text-lg md:text-2xl mt-10 text-center">
              Aún no se ha cargado ningún documento válido.
            </p>
          )}
        </div>

      </section>
    </>
  );
};

export default RutasU;
