import React from "react"
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

const {data, hasError,isLoanding}=useFetch('https://pokeapi.co/api/v2/pokemon/1');

  return (
  <>
  
  <h1>Informacion de Pokemon</h1>
  <hr/>

  {isLoanding && <p>Cargando...</p>}
  
  <h2>{data?.name}</h2>
  </>
  
  )
}
