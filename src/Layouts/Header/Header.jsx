import { FaUserPlus, FaSignInAlt, FaRegClock, FaHome, FaUser, FaTools, FaSignOutAlt } from "react-icons/fa";
import logo from '../../assets/img/icons/logo.png';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

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
        <div className="flex justify-end gap-4 pr-4 me-15">
          {!isLoggedIn ? (
            <>
              <ItemNavBar route='/Register' icon={FaUserPlus} label="Registro" />
              <ItemNavBar route='/InicioS' icon={FaSignInAlt} label="Login" />
              
            </>
          ) : (
            <>
              <ItemNavBar route='/dashboard' icon={FaHome} label="Inicio" />
              <ItemNavBar route='/PanelDusuario' icon={FaUser} label="Mi panel" />
              <ItemNavBar route='/herramientas' icon={FaTools} label="Herramientas" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
              >
                <FaSignOutAlt />
                <span>Cerrar sesión</span>
              </button>
            </>
          )}
        </div>
      </div>
      
    </header>
  );
}

export default Header;
