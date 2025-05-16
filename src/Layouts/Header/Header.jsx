import logo from '../../assets/img/icons/logo.png';
import './Header.css';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import main from '../../assets/img/icons/casa.png';
import Registrarme from '../../assets/img/icons/registrarme.png';
import { BiLogIn } from "react-icons/bi";

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
          <ItemNavBar route='/'>
          </ItemNavBar>
          <ItemNavBar route='/Register'>       
          </ItemNavBar>
          <ItemNavBar route='/Usuario'>    
          </ItemNavBar>
          <ItemNavBar route='/ContraR'> 
          </ItemNavBar>
          <ItemNavBar route='/InicioS'>
          </ItemNavBar>
          <ItemNavBar route='/panelAdmin'>
          </ItemNavBar>
        </div>
      </div>

      {/* Navegación textual (opcional, se puede ocultar en móvil) */}
     
    </>
  );
}

export default Header;
