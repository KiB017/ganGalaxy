import React from "react";
import '../stylesheets/Button.css';

function Button({ texto, manageClick, isButtonClick})
{
  return(
    <button
      className = { isButtonClick ? 'plus-btn' : 'minus-btn'}
      onClick = {manageClick}
    >
      {texto}
    </button>
  );
}

export default Button;