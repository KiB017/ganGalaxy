import React from 'react';
import Input from './Input'
import Button from './Button'
import '../stylesheets/NumberSelector.css'
import { useState } from "react";

function NumberSelector()
{
  const [input, setInput] = useState(0);

  const plusInput = () => 
  {
    setInput(input + 1);
  }

  const minusInput = () => 
  {
    if (input <= 0)
    {
      alert("you can't less tickets than 0");
    }
    else
    {
      setInput(input - 1);
    }
  }

  return(
    <div className='number-selector-container'>
      <label className='number-selector-text'>Quantity</label>
      <Button 
        texto = '-'
        className = {false}
        manageClick = {minusInput}
      />
      <Input input={input}/>
      <Button 
        texto = '+'
        className = {true}
        manageClick = {plusInput}
      />
      <button className='submit-btn'>Submit</button>
    </div>
  );
}

export default NumberSelector;