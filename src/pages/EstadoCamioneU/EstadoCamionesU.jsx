import { useState } from "react";
import { TruckIcon } from "lucide-react";

// Componente de tarjeta estilo oscuro sin bordes visibles
function Card({ children, className = "" }) {
  return (
    <section
      className={`rounded-2xl bg-[#01271E] shadow-lg ${className}`}
      role="region"
      aria-label="Estado de los camiones"
    >
      {children}
    </section>
  );
}

// Contenido interno con padding generoso
function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

// Input oscuro con foco visual claro
function Input({ className = "", ...props }) {
  return (
    <input
      className={`bg-[#014133] text-white rounded-xl px-5 py-3 text-lg w-full placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 ${className}`}
      {...props}
    />
  );
}

// Datos puesto por jorge salvaje para ver que tal quedo. tal quedo pequeño david
const datosCamiones = [
  { id: "T001", ubicacion: "Ciudad A", carga: "Carga completa", estado: "En ruta" },
  { id: "T002", ubicacion: "Ciudad B", carga: "Vacío", estado: "En mantenimiento" },
  { id: "T003", ubicacion: "Ciudad C", carga: "Carga parcial", estado: "En ruta" },
  { id: "T004", ubicacion: "Ciudad D", carga: "Carga completa", estado: "Detenido" },
];

export default function PanelEstadoCamiones() {
  const [filtro, setFiltro] = useState("");

  const camionesFiltrados = datosCamiones.filter((camion) =>
    camion.estado.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-10 space-y-8 bg-[#001C16] text-white min-h-screen font-sans">
      <header className="flex items-center gap-4 text-green-600">
        <TruckIcon className="w-8 h-8" />
        <h2 className="text-4xl font-bold">Estado de los Camiones</h2>
      </header>

      <Input
        placeholder="Filtrar por estado (ej: En ruta)"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        aria-label="Filtrar camiones por estado"
      />

      <Card>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-lg text-left">
            <thead className="text-green-600 uppercase tracking-wide text-sm bg-green-800">
              <tr>
                <th className="px-6 py-4">Ubicación</th>
                <th className="px-6 py-4">Carga</th>
                <th className="px-6 py-4">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-700">
              {camionesFiltrados.length > 0 ? (
                camionesFiltrados.map((camion, i) => (
                  <tr
                    key={camion.id}
                    className={`transition-colors duration-150 ${
                      i % 2 === 0 ? "bg-[#012D22]" : "bg-[#014133]"
                    } hover:bg-[#015B43]`}
                  >
                    <td className="px-6 py-4">{camion.ubicacion}</td>
                    <td className="px-6 py-4">{camion.carga}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">{camion.estado}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400 italic">
                    No se encontraron camiones con ese estado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
