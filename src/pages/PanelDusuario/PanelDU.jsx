import { useState } from "react";
import { UserCircle, LogOut, Home, Truck, MapPin } from "lucide-react";
import PanelEstadoCamionesU from "../EstadoCamioneU/EstadoCamionesU";
import ConsultaRutasU from "../ConsultarRU/ConsultarRU";
import Usuario from "../Usuario/Usuario";
import Solicitud from "../SolicitudesE/SolicitudesE";

export default function UserDashboard() {
  // más datos para probar de Jorge Salvaje
  const [user] = useState({ name: "David", email: "david@puto.com" });
  const [vista, setVista] = useState("inicio");

  const renderVista = () => {
    switch (vista) {
      case "camiones":
        return <PanelEstadoCamionesU />;
      case "rutas":
        return <ConsultaRutasU />;
      case "usuario":
        return <Usuario />;
      case "solicitud":
        return <Solicitud />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Actividad reciente">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>No hay actividad reciente.</li>
              </ul>
            </Card>
            <Card title="Resumen de cuenta">
              <p className="text-sm text-gray-300">
                Usuario registrado como <strong>{user.email}</strong>
              </p>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0d1c18] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#001f18] shadow-lg hidden md:flex flex-col">
        <div className="p-6 border-b border-[#003830]">
          <h2 className="text-2xl font-bold text-white">Mi Panel</h2>
        </div>
        <nav className="flex flex-col gap-1 p-4 flex-1">
          <NavItem
            active={vista === "inicio"}
            icon={<Home size={22} />}
            label="Inicio"
            onClick={() => setVista("inicio")}
          />
          <NavItem
            active={vista === "camiones"}
            icon={<Truck size={22} />}
            label="Camiones"
            onClick={() => setVista("camiones")}
          />
          <NavItem
            active={vista === "rutas"}
            icon={<MapPin size={22} />}
            label="Rutas"
            onClick={() => setVista("rutas")}
          />
          <NavItem
            active={vista === "usuario"}
            icon={<UserCircle size={22} />}
            label="Usuario"
            onClick={() => setVista("usuario")}
          />
          <NavItem
            active={vista === "solicitud"}
            icon={<MapPin size={22} />}
            label="Solicitudes"
            onClick={() => setVista("solicitud")}
          />
        </nav>
        <div className="p-4 border-t border-[#003830]">
          <NavItem
            icon={<LogOut size={22} />}
            label="Cerrar sesión"
            onClick={() => alert("Sesión cerrada")}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 space-y-6">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">¡Hola, {user.name}!</h1>
          </div>
          <UserCircle className="text-white" size={45} />
        </header>

        {renderVista()}
      </main>
    </div>
  );
}

function NavItem({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all
        ${active ? "bg-[#004030] text-white" : "text-gray-300 hover:bg-[#002d24] hover:text-white"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-[#002918] p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
