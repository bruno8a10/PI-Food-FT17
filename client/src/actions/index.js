export const GET_TYPES = "GET_TYPES";
export const GET_RECIPES = 'GET_RECIPES';
export const GET_DETALLE_RECIPE = "GET_DETALLE_RECIPE";
export const EMPTY_DETALLE_RECIPE = "EMPTY_DETALLE_RECIPE";
//rutas
export function getTypes(){
    return function(dispatch){
        return(
            fetch("http://localhost:3001/types"
            )
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_TYPES, payload: json})
            })
        )
    }
}
export function getRecipes(query){
    return function(dispatch){
        console.log("action")
        return(
            fetch(`http://localhost:3001/recipes?name=${query}`
            )
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_RECIPES, payload: json})
            })
        )
    }
}
export function getDetalleRecipes(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/recipesId/${id}`
        )
        .then(res => res.json())
        //despachamos el objeto al reduce
        .then(json => {
            dispatch({type:GET_DETALLE_RECIPE, payload: json})
        })
    }
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