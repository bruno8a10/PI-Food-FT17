import React, { useEffect, useState } from "react";
import logo from "../../img/api.png";
import "./home.css";
import Menu from "../menu/menu";
import Filtro from "../filtro/filtro";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from 'react-redux';
import {getRecipes} from "../../actions";
export default function Home() {
  const dispatch = useDispatch()
  const estado = useSelector((state)=> state.recipes)
  //____busqueda___________
  const [query, setQuery] = useState("")

  function handleChange (q)  {
   q.preventDefault()
    setQuery(q.target.value);
  } 
  function handleSubmit (q)  {
    q.preventDefault();
    dispatch(getRecipes(query))
  setQuery({
      name:""
  })
  }
//_________________________________________
useEffect(()=>{
  query.length > 0? dispatch(getRecipes(query)):dispatch(getRecipes(query))
},[query]);

  //_____________________
    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="300" height="60" src={logo} ></img>
          </p>
        <Menu/>
        <Filtro/>
        <p class="centrado">
        <section>
         <form className="form-control"  onSubmit={(e)=>handleSubmit(e)} >
          <input className="input-css"
          type="search"
          placeholder="Buscar..." 
          value = {query.name}
          onChange={(e)=>handleChange(e)}/>
         </form>
        </section>
        </p>
        <Cards/>
    </div>
    )
  }