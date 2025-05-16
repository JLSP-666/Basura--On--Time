import { NavLink } from "react-router-dom"
import "../BotonBack/BotonBack.css"


export const ItemNavBar = ({ content, route }) => {
  return (
    <NavLink to={route}>
     <div class="button-container posi">
  <button class="brutalist-button openai">
    <div class="openai-logo">

    </div>
    <div class="button-text">
     
    </div>
  </button>
</div>

    </NavLink>

  )
}
export default ItemNavBar;
