 
 import { NavLink } from "react-router-dom";

 
 export const ItemNavBar = ({ route, icon: Icon, label }) => {
   return (
     <NavLink to={route} className="w-full h-full">
        <button
            type="button"
            onClick={() => {}}
            className="w-56 mx-auto py-4 rounded-lg border border-emerald-600 text-emerald-600 font-semibold bg-white shadow-md hover:bg-emerald-50 active:scale-95 transition duration-300"
          >
            Crear Cuenta
          </button>
      
     </NavLink>
   );
 };
 