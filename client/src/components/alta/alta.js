import React, { useEffect,useState} from "react";
import { connect,useDispatch } from 'react-redux';
import "./alta.css";  
import { Link } from "react-router-dom";
import logo from "../../img/api.png";
import Menu2 from "../menu/menu2";
import {getTypes,postRecipes} from "../../actions";

function Alta(props) {
  const dispatch = useDispatch();
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
 function handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
//________________________________________________________________
 //select
 const [inTypes, setIn] = useState({
  type:[]
 })

 function handleTypes (e){
  props.getTypes(e.target.value)
  setInput({
    ...input,
    [e.target.name]:[...input.id, e.target.value]
  })
  setIn({
    type:[...inTypes.type, props.types]
  })
} 

  useEffect(() => {
    props.getTypes()
    },[])

    let types= []
    let clickT= (e)=> {
      types.push(e.target.value)
      console.log(types)
    }
  async function handleSubmit(e) {
    let { name, image,summary, spoonacularScore,healthScore,analyzedInstructions} = input
  	let body={name, image,summary, spoonacularScore,healthScore,analyzedInstructions,types}
    e.preventDefault()
    dispatch(postRecipes(body));
    // 	await fetch('http://localhost:3001/post', {
	  //     	method: 'POST',
	  //     	headers: {
	  //       'Content-Type': 'application/json'
	  //   },
    // 	body: JSON.stringify(body)
    // 	}
    //   ,
      setInput({
        types: [],
    name: "",
    image: "",
    summary: "",
    spoonacularScore: "",
    healthScore: "",   
    analyzedInstructions:"",
    types:""
      })
    //   ) 	
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
        <input  required type="text"  name="image" value={input.image} onChange={handleChange} />
        </li>
        <li>
        <label required for="fuerza">Resumen</label>
        </li>
        <li>
        <input  required type="text" name="summary"  value={input.summary} onChange={handleChange}/>
        </li>

        <li>
        <label for="fuerza">Puntuacion</label>
        </li>
        <li>
        <input  required type="text" name="spoonacularScore"  value={input.spoonacularScore} onChange={handleChange}/>
        </li>
        <li>
        <label for="fuerza">Puntaje de Salud</label>
        </li>
        <li>
        <input  required type="text" name="healthScore"  value={input.healthScore} onChange={handleChange} />
        </li>
        <li>
        <label for="fuerza">Instrucciones</label>
        </li>
        <li>
        <input  required type="text" name="analyzedInstructions"  value={input.analyzedInstructions} onChange={handleChange} />
        </li>
        <li>
        <label for="Defenza">Tipos de Dietas</label>
        </li>
       <li>
       <select 
       name="types" 
       multiple requires 
      onClick={clickT} >
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