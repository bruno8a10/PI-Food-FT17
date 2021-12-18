import axios from "axios";
export const GET_TYPES = "GET_TYPES";
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const GET_DETALLE_RECIPE = "GET_DETALLE_RECIPE";
export const EMPTY_DETALLE_RECIPE = "EMPTY_DETALLE_RECIPE";
export const POSTRECIPES = "POSTRECIPES"
//rutas

export function postRecipes(body){
    return function(dispatch){
        return(
            fetch('/post', {
                    	method: 'POST',
                    	headers: {
                      'Content-Type': 'application/json'
                  },
              	body: JSON.stringify(body)
              	})
        )
    }
}


export function getTypes(){   
    // return function(dispatch){
    //     return(
    //         fetch(`/types`
    //         )
    //         .then(res => res.json())
    //         //despachamos el objeto al reduce
    //         .then((json)=>{
    //             dispatch({type: GET_TYPES, payload: json})
    //         })
    //     )
    // }
    return async (dispatch) => {
        try {
          const response = await axios.get(`/types`);
          if (response?.data) {
            dispatch({ type: GET_TYPES, payload:  response.data  });
          }
        } catch (error) {
          
        }
      };
}
export function getRecipe(){
    return function(dispatch){
        console.log("action")
        return(
            fetch("/recipes"
            )
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_RECIPE, payload: json})
            })
        )
    }
}
export function getRecipes(query){
    // return function(dispatch){
    //     console.log("action")
    //     return(
    //         fetch(`/recipes?name=${query}`
    //         )
    //         .then(res => res.json())
    //         //despachamos el objeto al reduce
    //         .then((json)=>{
    //             dispatch({type: GET_RECIPES, payload: json})
    //         })
    //     )
    // }
    return async (dispatch) => {
        try {
          const response = await axios.get(`/recipes?name=${query}`);
          if (response?.data) {
            dispatch({ type: GET_RECIPES, payload:  response.data  });
          }
        } catch (error) {
          
        }
      };
}
export function getDetalleRecipes(id){
    // return function(dispatch){
    //     return fetch(`/recipesId/${id}`
    //     )
    //     .then(res => res.json())
    //     //despachamos el objeto al reduce
    //     .then(json => {
    //         dispatch({type:GET_DETALLE_RECIPE, payload: json})
    //     })
    // }
    return async (dispatch) => {
        try {
          const response = await axios.get(`/recipesId/${id}`);
          if (response) {
            dispatch({ type: GET_DETALLE_RECIPE, payload:  response});
          }
        } catch (error) {
          
        }
      };
}
export function emptyDetalleRecipes(num) {
    return function(dispatch) {
        dispatch({type: EMPTY_DETALLE_RECIPE}) 
    }
}
//_________ordenado por  nombre_________
export function ordenAZ(recipes){
    let  az =  recipes.sort((a,b) => a.name>b.name?1: -1)
    return {type: "OrdenarAZ", payload: az}
   }
export function ordenZA(recipes){
    let  za =  recipes.sort((a,b) => a.name<b.name?1: -1)
    return {type: "OrdenarZA", payload: za}
   }
   //_________ordenado por  Puntuacion_________
export function ordenMax(recipes){
       let  maxP =  recipes.sort((a,b) => a.spoonacularScore>b.spoonacularScore?1: -1)
       return {type: "OrdenarMax", payload: maxP}
   }
export function ordenMin(recipes){
       let  minP =  recipes.sort((a,b) => a.spoonacularScore<b.spoonacularScore?1: -1)
       return {type: "OrdenarMin", payload: minP}
   }

export function filtroP(recipes, filtro){
    let arr =[]
   for(let i=0; i<recipes.length;i++){
    if(Array.isArray(recipes[i].types)){
        for(let j=0; j<recipes[i].types.length;j++){
            if(recipes[i].types[j].name===filtro){
                arr.push(recipes[i])
            }
        }
    }
    if(recipes[i].types.includes(filtro)){
        arr.push(recipes[i])
    }
  }
   return{type: "FiltrarPorTipo", payload: arr}
};   