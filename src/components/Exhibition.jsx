import React from "react";
import '../stylesheets/Exhibitions.css'

function Exhibition(props)
{
  return(
    <div className='exhibition-box'>
      <img 
        src={require(`../images/exhibition-${props.imgNum}.webp`)}
        className="exhibition-image"
        alt='foto de exhibition'
      />
    </div>
  );
}

export default Exhibition;