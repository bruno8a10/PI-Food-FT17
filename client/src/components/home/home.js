import React, { useEffect, useState } from "react";
import logo from "../../img/api.png";
import "./home.css";
import Menu from "../menu/menu";
import Filtro from "../filtro/filtro";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from 'react-redux';
import {connect} from "react-redux";
import {getRecipes} from "../../actions";
function Home(props) {
  const estados = useSelector((state) => state); 
const [input, setInput] = useState({
})
function handlePoke (e) {
  setInput({
    ...input,
    [e.target.name]:[...input.name, e.target.value]
  })
}
  //____busqueda___________
  const [query, setQuery] = useState('');
  useEffect(()=>{
    async function fetchData(query){
      await props.getRecipes(query)
    }
    fetchData(query)
  },[query])

  const handleChange = (q) => {
    setQuery(q);
  } 
  const handleSubmit = (event) => {
    event.preventDefault();
  }

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
          onChange={(e)=>handleChange(e.target.value)}/>
         </form>
        </section>
        </p>
        <Cards/>
    </div>
    )
  }
   //===========================================//
   function mapStateToProps(state){
    return {
      ...state
    }
  }
  //Actions
function mapDispatchToProps(dispatch) {
  return{
    getRecipes: (query) => dispatch(getRecipes(query))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
