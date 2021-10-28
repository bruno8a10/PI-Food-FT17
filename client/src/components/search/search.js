import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions";
export default function SearchBar(){
    const dispatch = useDispatch()
    const[name,setName] = useState("")

function handleImputChange(e){
    e.preventDefault()
    setName(e.target.value)

}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getRecipes(name))
    setName({
        name: ""
    })
}
    return(
        <div>
            <input className = 'button2'
            type = "text"
            value = {name.name}
            placeholder = "Buscar..."
            onChange = {(e)=> handleImputChange(e)}
            />
            <button className= 'button3'type= "submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </div>
    )
}