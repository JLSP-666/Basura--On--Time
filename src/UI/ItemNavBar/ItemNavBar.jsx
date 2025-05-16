// ItemNavBar.jsx
import { NavLink } from "react-router-dom";
import './ItemNavBar.css';

export const ItemNavBar = ({ route, children }) => {
  return (
    
    <NavLink to={route} className="w-full h-full"> {children}
      <div class="button-container posi">
  <button class="brutalist-button openai">
    <div class="openai-logo">

    </div>
    <div class="button-text">
     
    </div>
  </button>
</div>
    </NavLink>
  );
};
