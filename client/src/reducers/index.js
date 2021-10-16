import {GET_TYPES} from "../actions"
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

    if(action.type === GET_TYPES){
        return {
            ...state,
            types: action.payload
       }
    }
    return state;
}
 export default rootReducer;