//import {GET_DOGS } from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    recipes:[],
    types:[],
    recipesDetalles:{},
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action){

    // if (action.type === "FiltrarPorTemperament"){
    //     return {
    //        ...state, 
    //       filtroTemperament: action.payload
    //     }
    //   }
    return state;
}
 export default rootReducer;