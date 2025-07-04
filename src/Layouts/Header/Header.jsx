import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt, FaUser, FaSignOutAlt, FaBars, FaTimes, FaRegClock } from 'react-icons/fa';
import logo from '../../assets/img/icons/logo.png';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import './Header.css';

export function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/InicioS');
  };

  return (
    <header>
      <div className="sticky top-0 bg-[var(--Voscuro2)] h-40 grid grid-cols-2 items-center z-50 FontGeologica text-white shadow-xl">
        {/* Logo con texto y frase inspiradora */}
        <div className="flex items-center gap-4 m-8">
          <div className="w-27 aspect-square bg-white rounded-full shadow-md flex justify-center items-center border-2">
            <img src={logo} alt="logo" className="w-auto h-22" />
          </div>
          <div className="text-white">
            <p className="FontCursive text-6xl">Basura On Time</p>
            <p className="text-sm text-gray-200 italic">Por un futuro más limpio, empezamos hoy.</p>
          </div>
        </div>

        {/* Botones de navegación dependiendo del estado de sesión */}
        <div className="hidden md:flex justify-end gap-4 pr-4 me-15">
          {!isLoggedIn ? (
            <>
              <ItemNavBar route="/Register" icon={FaUserPlus} label="Registro" />
              <ItemNavBar route="/InicioS" icon={FaSignInAlt} label="Login" />
            </>
          ) : (
            <>
              <ItemNavBar route="/PanelDU" icon={FaUser} label="Mi cuenta" />
              <button
                id="boton-cierre"
                onClick={handleLogout}
              >
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front flex items-center gap-2">
                  <FaSignOutAlt />
                  Cerrar sesión
                </span>
              </button>
            </>
          )}
        </div>

        {/* Icono hamburguesa en móviles */}
        <div className="md:hidden flex justify-end pr-8">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[160px] left-0 right-0 bg-[var(--Voscuro2)] text-white px-6 py-4 shadow-md z-50 FontGeologica"
          onMouseLeave={() => setMenuOpen(false)}
        >
          {!isLoggedIn ? (
            <>
              <ItemNavBar route="/Register" icon={FaUserPlus} label="Registro" />
              <ItemNavBar route="/InicioS" icon={FaSignInAlt} label="Login" />
              <ItemNavBar route="/RutasU" icon={FaRegClock} label="Horario de recolección" />
            </>
          ) : (
            <>
              <ItemNavBar route="/PanelDU" icon={FaUser} label="Mi cuenta" />
              <button
                id="boton-cierre-mobile"
                onClick={handleLogout}
                className="mt-4 w-full flex items-center gap-2"
              >
                <FaSignOutAlt />
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
