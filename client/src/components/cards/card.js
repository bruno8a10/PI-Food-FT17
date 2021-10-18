import React from 'react';
import  "./card.css"
import { Link } from "react-router-dom";
export default function Card({id,name, image,types}) {
  return (
    <div className = "movieCard" >
         <h4 >{name}</h4>
         <div>
           <Link to={`/Detalle/${id}`}>   
           <img className = "movieImage"
              width = "320px" height = "110px"
              src={image}
             alt={name}
            />
            </Link>
         </div>
         <p>{types}</p>

    </div>
  )
    
  
};