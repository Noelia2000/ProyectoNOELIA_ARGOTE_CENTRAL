import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerForm= (boardToCheck)=>{
  // revisar todas las combinaciones ganadoras
  // para ver si X u O gano
  for (const combo of WINNER_COMBOS){
    const [a,b,c]=combo
    if (
      boardToCheck[a]&&//0 -> x u o 
      boardToCheck[a]===boardToCheck[b]&&// 0 y 3 -> x -> x u o -> o
      boardToCheck[a]===boardToCheck[c]//0 y 6 -> x -> x u o -> o
    ){
      return boardToCheck[a]// x u o
    }
}
// si no hay ganador
return null
}

export const checkEnGame=(newBoard)=>{
    // revisar si hay un empate
    // si no hay mas espacios vacios
    // en el tablero
    
      return newBoard.every((square)=> square !== null)
    }