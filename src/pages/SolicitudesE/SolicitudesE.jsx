import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { BotonBack } from "../../UI/BotonBack/BotonBack";
import logoBasuraOnTime from "../../assets/img/icons/logoBasuraOnTime.png";

const SolicitudForm = () => {
  const token = localStorage.getItem("token");
  const URL = "https://express-latest-6gmf.onrender.com/requests";

  const [zona, setZona] = useState("");
  const [fecha_solicitud, setFechaSolicitud] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipo_residuo, setTipoResiduo] = useState("");
  const [tamano, setTamano] = useState("");

  const handleZonaChange = (e) => setZona(e.target.value);
  const handleFechaSolicitudChange = (e) => setFechaSolicitud(e.target.value);
  const handleCantidadChange = (e) => setCantidad(e.target.value);
  const handleTipoResiduoChange = (e) => setTipoResiduo(e.target.value);
  const handleTamanoChange = (e) => setTamano(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { zona, fecha_solicitud, cantidad, tipo_residuo, tamano };

    try {
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar la solicitud, por favor inicia sesión",
          showConfirmButton: false,
        });
        return;
      }

      Swal.fire({
        title: "Enviando solicitud...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await axios.post(URL, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.close();

      Swal.fire({
        icon: "success",
        title: "Solicitud enviada",
        text: "Tu solicitud especial fue enviada correctamente",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      // Limpiar formulario
      setZona("");
      setFechaSolicitud("");
      setCantidad("");
      setTipoResiduo("");
      setTamano("");
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "Ocurrió un problema al enviar la solicitud. Intenta nuevamente.",
      });
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="FontGeologica min-h-screen bg-[var(--Voscuro)] flex items-center justify-center px-4">
      <div className="flex flex-col justify-center items-center">
        <img className="Img-logo" src={logoBasuraOnTime} alt="Logo Basura on Time" />
        <p className="FontCursive text-6xl text-center text-white">BASURA ON TIME</p>
      </div>

      <div className="absolute top-4 left-4 z-50">
        <BotonBack route="/" content=" " />
      </div>

      <div className="relative w-[520px] max-w-lg p-8 bg-[var(--Voscuro2)] rounded-4xl ml-[16rem] sm:ml-[10rem]">
        <h2 className="FontCursive text-4xl text-center mb-8 text-white">Solicitud Especial</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <InputField label="Zona" name="zona" value={zona} onChange={handleZonaChange} />
          <InputField
            label="Fecha de Solicitud"
            name="fecha_solicitud"
            type="date"
            value={fecha_solicitud}
            onChange={handleFechaSolicitudChange}
          />
          <InputField
            label="Cantidad"
            name="cantidad"
            type="number"
            value={cantidad}
            onChange={handleCantidadChange}
          />
          <InputField label="Tipo de Residuo" name="tipo_residuo" value={tipo_residuo} onChange={handleTipoResiduoChange} />
          <InputField label="Tamaño" name="tamano" value={tamano} onChange={handleTamanoChange} />
          <button
            type="submit"
            className="rounded-md w-full h-10 bg-[var(--Vclaro)] text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mt-1"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-white" />
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="rounded-md px-4 py-2 bg-[var(--Vclaro2)] text-white placeholder:text-center"
    />
  </div>
);

export default SolicitudForm;
