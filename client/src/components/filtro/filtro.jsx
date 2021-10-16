import React, { useEffect, useState } from "react";
import {getTypes} from "../../actions";
import { connect } from 'react-redux'; 
//import {filtroP} from "../../actions";
import "../filtro/filtro.css"
import { useDispatch, useSelector } from 'react-redux';

 function Filtro(props) {
const dispatch = useDispatch();
const pFiltro = useSelector(state => state.types)
 //______________pase a grupal_______
// function fn2(e) {
//     // alert("entrooo" + e.target.value)
//     dispatch(filtroP(pFiltro, e.target.value));
// }
 //___________________________________
      //treaera todo los tipos de pokemones
const [inPoke, setInPoke] = useState({
  poks: []
})
  function handlePoke (e) {
    props.getTypes(e.target.value)  
    setInPoke({
      poks:[...inPoke.poks, props.types]
    })   
  }
  	useEffect(() => {
    props.getTypes()
  	},[])
  return (
    <div>
        <select className="select-css"   name="filtro"   >
          <option value="">Tipos</option>
          {props.types && props.types.map(c => (
            <option value={c.name} name="c.name">{c.name}</option>
          ))}
         </select>
    </div>
  );
}
  function mapStateToProps(state){
    return {
      ...state
    }
  }
  //Actions
  function mapDispatchToProps(dispatch) {
    return {
        getTypes:() => dispatch(getTypes()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Filtro);