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
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <img src={main} alt="Inicio" className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>

          <ItemNavBar route='/Register'>
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <img src={Registrarme} alt="Registrarme" className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>

          <ItemNavBar route='/Usuario'>
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <BiLogIn className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>
          <ItemNavBar route='/ContraR'>
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <BiLogIn className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>
          <ItemNavBar route='/InicioS'>
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <BiLogIn className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>
          <ItemNavBar route='/panelAdmin'>
            <button className="shadow-2xl border bg-white w-14 h-14 flex items-center justify-center rounded-full">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center bg-white">
                <BiLogIn className="w-6 h-6" />
              </div>
            </button>
          </ItemNavBar>
        </div>
      </div>

      {/* Navegación textual (opcional, se puede ocultar en móvil) */}
     
    </>
  );
}

export default Header;
