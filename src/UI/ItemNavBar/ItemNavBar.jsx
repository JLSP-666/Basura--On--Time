import { NavLink } from "react-router-dom";
import './ItemNavBar.css';

export const ItemNavBar = ({ route, icon: Icon, label }) => {
  return (
    <NavLink to={route} className="itemNavLink">
      <div className="buttonContent">
        {Icon && <Icon className="icon" />}
        <span className="label">{label}</span>
      </div>
    </NavLink>
  );
};
