import { useState } from "react";
import {
  UserCircle,
  Home,
  Truck,
  MapPin,
  Menu,
  X as CloseIcon
} from "lucide-react";
import PanelEstadoCamionesU from "../EstadoCamioneU/EstadoCamionesU";
import ConsultaRutasU from "../ConsultarRU/ConsultarRU";
import Usuario from "../Usuario/Usuario";
import Solicitud from "../SolicitudesE/SolicitudesE";

export default function UserDashboard() {
  const [user] = useState({ name: "David", email: "david@puto.com" });
  const [vista, setVista] = useState("inicio");
  const [menuAbierto, setMenuAbierto] = useState(false);

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
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0d1c18] text-white relative">
      {/* Menú hamburguesa para móvil */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#001f18] shadow-md z-50">
        <h2 className="text-xl font-bold">Panel</h2>
        <button onClick={() => setMenuAbierto(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar grande (escritorio) */}
      <aside className="w-64 bg-[#001f18] shadow-lg hidden md:flex flex-col">
        <SidebarNav vista={vista} setVista={setVista} closeMenu={() => {}} />
      </aside>

      {/* Sidebar móvil animado */}
      {menuAbierto && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuAbierto(false)}
          ></div>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-[#001f18] shadow-md p-4 z-50 animate-slide-in"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menú</h2>
              <button onClick={() => setMenuAbierto(false)}>
                <CloseIcon size={24} />
              </button>
            </div>
            <SidebarNav
              vista={vista}
              setVista={(v) => {
                setVista(v);
                setMenuAbierto(false);
              }}
              closeMenu={() => setMenuAbierto(false)}
            />
          </div>
        </>
      )}

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:p-10 space-y-6 pt-20 md:pt-0">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">¡Hola, {user.name}!</h1>
          <UserCircle className="text-white" size={45} />
        </header>

        {renderVista()}
      </main>

      {/* Animación Tailwind */}
      <style>
        {`
        @keyframes slide-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
}

function SidebarNav({ vista, setVista }) {
  return (
    <nav className="flex flex-col gap-2">
      <NavItem
        active={vista === "inicio"}
        icon={<Home size={20} />}
        label="Inicio"
        onClick={() => setVista("inicio")}
      />
      <NavItem
        active={vista === "camiones"}
        icon={<Truck size={20} />}
        label="Camiones"
        onClick={() => setVista("camiones")}
      />
      <NavItem
        active={vista === "rutas"}
        icon={<MapPin size={20} />}
        label="Rutas"
        onClick={() => setVista("rutas")}
      />
      <NavItem
        active={vista === "usuario"}
        icon={<UserCircle size={20} />}
        label="Usuario"
        onClick={() => setVista("usuario")}
      />
      <NavItem
        active={vista === "solicitud"}
        icon={<MapPin size={20} />}
        label="Solicitudes"
        onClick={() => setVista("solicitud")}
      />
    </nav>
  );
}

function NavItem({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium transition
        ${active ? "bg-[#004030] text-white" : "text-gray-300 hover:bg-[#002d24]"}`}
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
