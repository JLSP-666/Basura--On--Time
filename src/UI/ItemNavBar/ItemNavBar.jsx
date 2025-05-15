// ItemNavBar.jsx
import { NavLink } from "react-router-dom";
import './ItemNavBar.css';

export const ItemNavBar = ({ route, children }) => {
  return (
    <NavLink to={route} className="w-full h-full">
      {children}
    </NavLink>
  );
};
