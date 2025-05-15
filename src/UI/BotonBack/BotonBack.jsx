import React from 'react';
import { NavLink } from 'react-router-dom';
import  '../BotonBack/BotonBack.css';	
export const ItemNavBar = ({ content = 'Go Back', route = '/', icon }) => {
  return (
   <div class="button-container">
  <button class="brutalist-button openai">
    <div class="openai-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="openai-icon"
      >
        <path
          fill="#10A37F"><h1></h1></path>
      </svg>
    </div>
    <div class="button-text">
     
    </div>
  </button>
</div>
  );
};

export default ItemNavBar;
