import React, { useEffect, useState } from "react";
import logo from "../../img/api.png";
import "./home.css";
import Menu from "../menu/menu";
//import FiltroAct from "../filtro/filtro1";
//import Ssearch from "../ssearch/ssearch";
//import Cards from "../cards/cards";
import { useDispatch, useSelector } from 'react-redux';
import {connect} from "react-redux";
//import {getCountries} from "../../actions";
function Home(props) {
  //_____________________

    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="400" height="80" src={logo} ></img>
          </p>
        <Menu/>

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
  return
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);