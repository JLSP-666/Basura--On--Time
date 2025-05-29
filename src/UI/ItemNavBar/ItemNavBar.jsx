import { NavLink } from "react-router-dom";
import './ItemNavBar.css';

export const ItemNavBar = ({ route, icon: Icon, label }) => {
  return (
<<<<<<< HEAD
    <NavLink to={route} className="itemNavLink">
      <div className="buttonContent">
        {Icon && <Icon className="icon" />}
        <span className="label">{label}</span>
      </div>
=======
    <NavLink to={route} className="w-full h-full">
     <button class="button">
      
    </button>
>>>>>>> origin/David_Muñoz
    </NavLink>
  );
};
