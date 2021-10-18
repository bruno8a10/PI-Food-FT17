import React, { useEffect,useState} from "react";
import { connect } from 'react-redux';
import "./alta.css";  
import { Link } from "react-router-dom";
import logo from "../../img/api.png";
import Menu2 from "../menu/menu2";
import {getTypes} from "../../actions";

function Alta(props) {
//post
  const [input, setInput] = useState({
    types: [],
    name: "",
    image: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",
    analyzedInstructions:"",
 })
 //select
 //captura los datos
function handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

 const [inTypes, setIn] = useState({
  pais:[]
 })
 function handleTypes (e){
  props.getTypes(e.target.value)
  setIn({
    pais:[...inTypes.pais, props.types]
  })
} 

  useEffect(() => {
    props.getTypes()
    },[])
  
  async function handleSubmit(e) {
  		e.preventDefault()
    
    	await fetch('http://localhost:3001/post', {
	      	method: 'POST',
	      	headers: {
	        'Content-Type': 'application/json'
	    },
    	body: JSON.stringify(input)
    	},
      setInput({
        types: [],
    name: "",
    image: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",   
    analyzedInstructions:"",
      })
      ) 	
  	}
    
    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width="300" height="60" src={logo} ></img>
          </p> 
     <Menu2/>
      <div className="detalle">
      <h2>Alta</h2>
        <form className="forms" onSubmit={handleSubmit}>
          <div>
        <ul>
        <li>
        <label  for="vida">Nombre</label>
        </li>
        <li>
        <input required  type="text" name="name"  value={input.name} onChange={handleChange} />
        </li>
        <li>
        <label  for="vida">Image</label>
        </li>
        <li>
        <input type="text"  name="image" value={input.image} onChange={handleChange} />
        </li>
        <li>
        <label for="fuerza">Resumen</label>
        </li>
        <li>
        <input type="text" name="summary"  value={input.summary} onChange={handleChange}/>
        </li>

        <li>
        <label for="fuerza">Puntuacion</label>
        </li>
        <li>
        <input type="text" name="spoonacularScore"  value={input.spoonacularScore} onChange={handleChange}/>
        </li>



        <li>
        <label for="fuerza">Puntaje de Salud</label>
        </li>
        <li>
        <input type="text" name="healthScore"  value={input.healthScore} onChange={handleChange} />
        </li>

        <li>
        <label for="fuerza">Instrucciones</label>
        </li>
        <li>
        <input type="text" name="analyzedInstructions"  value={input.analyzedInstructions} onChange={handleChange} />
        </li>

        <li>
        <label for="Defenza">Tipos de Dietas</label>
        </li>
       <li>
       <select 
       name="types"  
       value={input.types} onChange={handleChange} >
       <option value=""> Tipo</option>
       {props.types && props.types.map(c => (
            <option value={c.id} name="c.name">{c.name}</option>
          ))}      
       </select>
       </li>
       <li>
         <br></br>
         <input className="cract" type="submit" value="Crear"/>
       </li>
        </ul>
        </div>
        </form> 
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
function mapDispatchToProps(dispatch) {
  return {
    getTypes:() => dispatch(getTypes()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Alta);