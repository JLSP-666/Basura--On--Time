import React, { useState } from "react";
import { FaUserCircle, FaPowerOff, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PanelConductor() {
  const [encendido, setEncendido] = useState(false);
  const navigate = useNavigate();

  const toggleEncendido = () => {
    setEncendido(!encendido);
    console.log(encendido ? "Apagado" : "Encendido");
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/"); // 👈 redirige al home
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1c18] text-white px-4 py-10 space-y-10">
      {/* Cabecera */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={50} className="text-white" />
        <div>
          <h1 className="text-3xl font-bold">Panel de Conductor</h1>
          <p className="text-sm text-gray-300 italic">Control del camión</p>
        </div>
      </div>

      {/* Botón Encender/Apagar */}
      <button
        onClick={toggleEncendido}
        className={`flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200
          ${encendido ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
      >
        <FaPowerOff size={22} />
        {encendido ? "Apagar camión" : "Encender camión"}
      </button>

      {/* Botón cerrar sesión */}
      <button
        onClick={cerrarSesion}
        className="flex items-center gap-3 bg-[#004030] hover:bg-[#005f45] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      >
        <FaSignOutAlt size={20} />
        Cerrar sesión
      </button>
    </div>
  );
}
