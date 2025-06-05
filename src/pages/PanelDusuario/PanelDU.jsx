import { useState } from "react";
import { UserCircle, LogOut, Home } from "lucide-react";

export default function UserDashboard() {
  const [user] = useState({ name: "david", email: "david@puto.com" });

  return (
    <div className="min-h-screen flex bg-[#001810] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#002018] shadow-md hidden md:block">
        <div className="p-6 border-b border-[#004030]">
          <h2 className="text-2xl font-bold text-white">Mi Panel</h2>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <NavItem icon={<Home size={20} />} label="Inicio" />
          <NavItem icon={<LogOut size={20} />} label="Cerrar sesión" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-white">¡Hola, {user.name}!</h1>
            <p className="text-[#9ca3af]">Bienvenido de nuevo</p>
          </div>
          <UserCircle className="text-white" size={40} />
        </header>

        {/* Stats */}
       

        {/* Recent Activity */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Actividad reciente</h2>
          <div className="bg-[#002918] p-4 rounded-xl shadow-sm text-white">
            <ul className="space-y-2 text-sm">
              
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-[#004030] transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatBox({ title, value }) {
  return (
    <div className="bg-[#003820] p-5 rounded-xl shadow text-white">
      <h3 className="text-lg text-[#9ca3af]">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
