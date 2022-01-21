import React, { useEffect, useState } from "react";
import Card from "./card";
import "./cards.css"
import {getRecipes} from "../../actions";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../Spinner"
function Cards(props) {
    const [query, setQuery] = useState('')
const estados = useSelector((state) => state);  
const filtroT = useSelector((state) => state.filtro);  ;  
//    paginado
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 8;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
    const recipess = props.recipes.slice(conteoInicial,conteoFinal);
    var inicio = true;
    var final = true;
    var pag = true;
    // console.log(props.recipes.length)
    // console.log("conteo final :"+conteoFinal)
    if(conteoInicial=== 0 || filtroT.length>0){
        inicio=false;
    }
    console.log(Math.floor(props.recipes.length/8))
    if(numeroPagina >=Math.ceil(props.recipes.length/8) ||filtroT.length>0){
        final=false
    }
    if(filtroT.length>0){
        final=false
    }
    useEffect(()=> {
        props.getRecipes(query)
       },[])
    return (
    <div className="card">
       <div className="contenedor">
       {
        filtroT.length > 0 ? filtroT.map(c=>
            <Card   
             key={c.id} 
                id={c.id}
               name={c.name}
               image={c.image}
               types={c.types?.map(e=> typeof e === "string"? <p> {e}</p>:<p>{e.name}</p> )}
            /> )

        :recipess.length > 0 ? recipess.map(c=>
             <Card   
              key={c.id} 
                 id={c.id}
                name={c.name}
                image={c.image}
                types={c.types?.map(e=> typeof e === "string"? <p> {e}</p>:<p>{e.name}</p> )}
             /> 
         ):
         <div>
             <p>No hay datos</p>
             <Spinner />
           </div>
        }
       </div>
       <div >
           {inicio ?(
               <button className="button1" onClick={() => setPagina(numeroPagina - 1)}>Anterior</button>
           ):null}
            {pag ?(
               <button  className="button1">{numeroPagina}</button>
           ):null}

            {final ?(
               <button   className="button1" onClick={() => setPagina(numeroPagina + 1)}>Siguiente</button>
           ):null}
            
            
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