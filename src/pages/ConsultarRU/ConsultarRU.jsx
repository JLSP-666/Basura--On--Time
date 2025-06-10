import { useState } from "react";
import { MapPinIcon } from "lucide-react";

// Datos simulados de rutas
const rutas = [
  {
    id: "R001",
    zona: "Centro",
    horario: "6:00 - 10:00",
    dias: "Lunes, Miércoles, Viernes",
    camion: "ABC-123",
  },
  {
    id: "R002",
    zona: "Norte",
    horario: "8:00 - 12:00",
    dias: "Martes, Jueves",
    camion: "DEF-456",
  },
  {
    id: "R003",
    zona: "Sur",
    horario: "7:00 - 11:00",
    dias: "Todos los días",
    camion: "GHI-789",
  },
];

function Input({ className = "", ...props }) {
  return (
    <input
      className={`bg-[#014133] text-white rounded-xl px-5 py-3 text-lg w-full placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 ${className}`}
      {...props}
    />
  );
}

export default function ConsultaRutas() {
  const [filtro, setFiltro] = useState("");

  const rutasFiltradas = rutas.filter((ruta) =>
    ruta.zona.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-10 space-y-8 bg-[#001C16] text-white min-h-screen font-sans">
      <h2 className="text-4xl font-bold flex items-center gap-4 text-green-600">
        <MapPinIcon className="w-8 h-8" />
        Consulta de Rutas de Recolección
      </h2>

      <Input
        placeholder="Filtrar por zona (ej: Norte)"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="max-w-xl"
      />

      <div className="rounded-2xl bg-[#01271E] shadow-lg">
        <div className="overflow-x-auto p-6">
          <table className="w-full text-lg text-left">
            <thead className="text-green-600 uppercase tracking-wide text-sm bg-green-800 rounded-lg">
              <tr>
                <th className="px-6 py-4">Zona</th>
                <th className="px-6 py-4">Horario</th>
                <th className="px-6 py-4">Días</th>
                <th className="px-6 py-4">Camión</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-700">
              {rutasFiltradas.map((ruta) => (
                <tr
                  key={ruta.id}
                  className="hover:bg-[#015B43] transition-colors duration-150"
                >
                  <td className="px-6 py-4">{ruta.zona}</td>
                  <td className="px-6 py-4">{ruta.horario}</td>
                  <td className="px-6 py-4">{ruta.dias}</td>
                  <td className="px-6 py-4">{ruta.camion}</td>
                </tr>
              ))}
              {rutasFiltradas.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-400">
                    No se encontraron rutas en esa zona.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
