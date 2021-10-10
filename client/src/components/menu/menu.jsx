import React from "react";
import "./menu.css";  
//import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {

  return (
     <div >
 <nav>
			<ul>
				<li><a href="/Home">Todos las recetas</a></li>
				<li><button  className="button4" >Ord receta A-Z</button></li>
				<li><button  className="button4" >Ord receta Z-A</button></li>
				<li><button  className="button4" >Ord Puntuacion Min</button></li>
                <li><button  className="button4" >Ord Puntuacion Max</button></li>
				<li><a >Alta</a></li>
			</ul>
		</nav>
    </div> 
  );
}