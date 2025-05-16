import { FaHome, FaUserPlus, FaUser, FaLock, FaSignInAlt, FaTools } from "react-icons/fa";
import logo from '../../assets/img/icons/logo.png';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import './Header.css';

export function Header() {
  return (
    <>
      <div className="sticky top-0 bg-white h-30 grid grid-cols-3 items-center border-b-2 shadow-md z-50">
        
        {/* Logo */}
        <div className="logo border-2 bg-white h-20 w-24 m-4 rounded-full shadow-md flex justify-center items-center">
          <img src={logo} alt="logo" className="w-auto" />
        </div>

        {/* Camión decorativo */}
        <div className="flex justify-center">
          <img src={camion} alt="gif divertido" className="h-16" />
        </div>

        {/* Botones de navegación con íconos */}
        <div className="flex justify-end gap-4 pr-4">
          <ItemNavBar route='/' icon={FaHome} label="Inicio" />
          <ItemNavBar route='/Register' icon={FaUserPlus} label="Registro" />
          <ItemNavBar route='/Usuario' icon={FaUser} label="Usuario" />
          <ItemNavBar route='/ContraR' icon={FaLock} label="Contraseña" />
          <ItemNavBar route='/InicioS' icon={FaSignInAlt} label="Login" />
          <ItemNavBar route='/panelAdmin' icon={FaTools} label="Admin" />
        </div>
      </div>
    </>
  );
}

export default Header;
