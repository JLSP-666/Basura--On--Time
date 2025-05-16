import { NavLink } from "react-router-dom";
import './ItemNavBar.css';

export const ItemNavBar = ({ route, icon: Icon, label }) => {
  return (
    <NavLink to={route} className="w-full h-full">
      <div className="button-container posi">
        <button className="brutalist-button openai flex flex-col items-center justify-center text-[rgb(0,50,37)] hover:scale-105 transition">
          <div className="mb-1">
            <Icon size={22} />
          </div>
          <div className="text-xs font-semibold">
            {label}
          </div>
        </button>
      </div>
    </NavLink>
  );
};
