import React from "react";
import "./menu.css";  
//import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
	const dispatch = useDispatch();
	const ordenarNombre = useSelector(state => state.recipes)
	//const ordenarNombreFiltro = useSelector(state => state.filtroContinente)
	const ordenarPeso = useSelector(state => state.recipes)
	//const ordenarPesoFiltro = useSelector(state => state.filtroContinente)
	function AZ(){
		// if(ordenarNombreFiltro){
		//   dispatch(ordenAZ(ordenarNombreFiltro));
		// }
		  dispatch(ordenAZ(ordenarNombre));
		
	  }
	  function ZA(){
		// if(ordenarNombreFiltro){
		//   dispatch(ordenZA(ordenarNombreFiltro));
		// }
		dispatch(ordenZA(ordenarNombre));
	  }
	  function MAX(){
		// if(ordenarPesoFiltro){
		//   dispatch(ordenMax(ordenarPesoFiltro));
		// }
		dispatch(ordenMax(ordenarPeso));
	  }
	  function MIN(){
		// if(ordenarPesoFiltro){
		//   dispatch(ordenMin(ordenarPesoFiltro));
		// }
		dispatch(ordenMin(ordenarPeso));
	  }
  return (
     <div >
 <nav>
			<ul>
				<li><a href="/Home">Todos las recetas</a></li>
				<li><button  className="button4" onClick={AZ} >Ord receta A-Z</button></li>
				<li><button  className="button4" onClick={ZA}>Ord receta Z-A</button></li>
				<li><button  className="button4" onClick={MAX} >Ord Puntuacion Min</button></li>
                <li><button  className="button4" onClick={MIN}>Ord Puntuacion Max</button></li>
				<li><a href="/Alta">Alta</a></li>
			</ul>
		</nav>
    </div> 
  );
}