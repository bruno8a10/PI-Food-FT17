import React, { useEffect } from "react";
import {getDetalleRecipes, emptyDetalleRecipes} from "../../actions";
import {connect} from 'react-redux';
import logo from "../../img/api.png";
import Spinner from "../Spinner";
import "./detalle.css"; 
import { Link } from "react-router-dom";
import Menu2 from "../menu/menu2";

function Detalle(props) {
  //const id= data.getDetallePokemon(data.match.params.id)
  const id= props.match.params.id;
  useEffect(()=>{
    props.emptyDetalleRecipes()
    props.getDetalleRecipes(id)    
  },[id])

    return (
      <div  translate ="no">  
        <p className="centrado">
          <img  width="300" height="60" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>
       {props.recipesDetalles.name ?
        <div className="detalle" >
           <h4>{props.recipesDetalles.name}</h4>
          <img width = "600px" height = "300px"src={props.recipesDetalles.image} alt={props.recipesDetalles.name}/>
          <p>Resumen: {props.recipesDetalles.summary}</p>
          <h4>puntuación popular: {props.recipesDetalles.spoonacularScore} Puntaje de Salud: {props.recipesDetalles.healthScore}</h4>
          <p>Analizar Intrucciones: {props.recipesDetalles.analyzedInstructions}</p>
          {props.recipesDetalles.types?.map(e=> typeof e === "string"? <h3> Tipos: {e}</h3>:<h3> Tipos: {e.name}</h3> )}
        </div>
         :<Spinner/>
       } 
      </div>
       
     </div>
      
    );
}

//===========================================//

function mapStateToProps(state){
  return {
    ...state
  }
}
//Actions
function mapDispatchToProps(dispatch) {
  return {
    emptyDetalleRecipes:() => dispatch(emptyDetalleRecipes()),
    getDetalleRecipes: (id) => dispatch(getDetalleRecipes(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detalle);