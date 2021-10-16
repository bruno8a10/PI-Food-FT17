export const GET_TYPES = "GET_TYPES";

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