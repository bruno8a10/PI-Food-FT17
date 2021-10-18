import React, { useEffect, useState } from "react";
import Card from "./card";
import "./cards.css"
import {getRecipes} from "../../actions";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
function Cards(props) {
const estados = useSelector((state) => state);  
//const filtroT = useSelector((state) => state.filtroTemperament);  ;  
//    paginado
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 4;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
    const recipess = props.recipes.slice(conteoInicial,conteoFinal);
    useEffect(()=> {
        props.getRecipes()
       },[])
    return (
    <div className="card">
       <div className="contenedor">
       { recipess.length > 0 && recipess.map(c=>
        //  { filtroO.length < 1 && dogss.length > 0 ? dogss.map(c=>
             <Card   
              key={c.id} 
                 id={c.id}
                name={c.name}
                image={c.image}
                types={c.types?.map(e=> typeof e === "string"? <p> {e}</p>:<p>{e.name}</p> )}
             /> 
         )
        }
       </div>
       <div >
             <button className="button1" onClick={() => setPagina(numeroPagina - 1)}>Anterior</button>
            <button  className="button1">{numeroPagina}</button>
            <button   className="button1" onClick={() => setPagina(numeroPagina + 1)}>Siguiente</button>
         </div>

     </div>
    )
};
function mapStateToProps(state){
    return {
        ...state
    }
    }
    function mapDispatchToProps(dispatch){
    return {
       
        getRecipes: (query) => dispatch(getRecipes(query))
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Cards)