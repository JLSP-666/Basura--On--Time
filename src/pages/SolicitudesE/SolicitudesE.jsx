import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ItemNavBar } from "../../UI/BotonBack/BotonBack";

const SolicitudForm = () => {
  const token = localStorage.getItem("token");
  const URL = "http://localhost:10101/requests";
  const [zona, setZona] = useState("");
  const [fecha_solicitud, setFechaSolicitud] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipo_residuo, setTipoResiduo] = useState("");
  const [tamano, setTamano] = useState("");

const handleZonaChange = (e) => {
  setZona(e.target.value);
}
const handleFechaSolicitudChange = (e) => {
  setFechaSolicitud(e.target.value);
} 
const handleCantidadChange = (e) => {
  setCantidad(e.target.value);
}
const handleTipoResiduoChange = (e) => {
  setTipoResiduo(e.target.value);
}
const handleTamanoChange = (e) => {
  setTamano(e.target.value);
}
  const handleSubmit = async (e) => {
    const formData = {
      zona,
      fecha_solicitud,
      cantidad,
      tipo_residuo,
      tamano
    }
    e.preventDefault();
    console.log("Datos enviados:", formData);
    try{
      console.log("Token:", token);
      if (token) {
        const response = await axios.post(URL, formData ,{
        headers: {
          'Authorization' : `Bearer ${token}`
        },  
      })
      alert("Solicitud enviada correctamente");
      } else {
        alert("No se pudo enviar la solicitud, por favor inicia sesión");
      }
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(0,26,19)] flex items-center justify-center px-4">
       <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content=" " />
        </div>
      <div className="relative w-full max-w-md p-8 bg-[#009456c5] border-[5px] border-black rounded-[40px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
       
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#0f0303]">
         Solicitud Especial
        </h2>
        <form className="space-y-5">
          <InputField
            label="Zona"
            name="zona"
            onChange={handleZonaChange}
          />
          <InputField
            label="fecha de Solicitud"
            name="fecha_solicitud"
            onChange={handleFechaSolicitudChange}
          />
          <InputField
            label="Cantidad"
            name="cantidad"
            type="number"
            onChange={handleCantidadChange}
          />
          <InputField
            label="Tipo de Residuo"
            name="tipo_residuo"
            onChange={handleTipoResiduoChange}
          />
          <InputField
            label="Tamaño"
            name="tamano"
            onChange={handleTamanoChange}
          />

          <button
            type="submit"
            className="w-full bg-[#d1fd40] hover:bg-[#7dff7d] text-black font-bold py-3 px-6 rounded-full border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            onClick={handleSubmit}
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
    <label
      htmlFor={name}
      className="mb-1 text-base font-bold text-[#000000] drop-shadow-[1px_1px_0_rgba(0,0,0,0.7)]"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="rounded-full px-4 py-2 border-[3px] border-black bg-white text-gray-800 shadow-[inset_2px_2px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#b6cc74]"
    />
  </div>
);

export default SolicitudForm;
