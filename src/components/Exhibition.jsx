import React from "react";
import '../stylesheets/Exhibitions.css'

function Exhibition(props)
{
  return(
    <img 
      src={require(`../images/exhibition-${props.imgNum}.webp`)}
      className="exhibition-image"
      alt='foto de exhibition'
    />
  );
}

export default Exhibition;