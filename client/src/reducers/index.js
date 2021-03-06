import {GET_TYPES, GET_RECIPES,GET_RECIPE, GET_DETALLE_RECIPE,EMPTY_DETALLE_RECIPE} from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    recipes:[],
    types:[],
    ordenar:[],
    filtro:[],
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
    if(action.type === GET_RECIPE){
        return {
            ...state,
            recipes: action.payload
       }
    }
    // rutas
    if(action.type === GET_TYPES){
        return {
            ...state,
            types: action.payload
       }
    }

    if(action.type === GET_RECIPES){
        console.log("reduces"+ state)
        return {
            ...state,
            recipes: action.payload
       }
    }
    if(action.type === GET_DETALLE_RECIPE){
        return {
            ...state,
            recipesDetalles: action.payload
       }
    }
    if(action.type === EMPTY_DETALLE_RECIPE){
        return {
            ...state,
            recipesDetalles:{}
       }
    }
      //ordenamiento
      if(action.type === "OrdenarAZ"){
        return{
            ...state,
            ordenar: action.payload
        }    
        }
        if(action.type === "OrdenarZA"){
            return{
            ...state,
            ordenar: action.payload
            }    
            }
         if(action.type === "OrdenarMax"){
             return{
                ...state,
                ordenar: action.payload
             }    
         }
         if(action.type === "OrdenarMin"){
             return{
             ...state,
             ordenar: action.payload
             }    
        } 
        if(action.type === "FiltrarPorTipo"){
            return{
            ...state,
            filtro: action.payload
            }    
       } 
    return state;
}
 export default rootReducer;