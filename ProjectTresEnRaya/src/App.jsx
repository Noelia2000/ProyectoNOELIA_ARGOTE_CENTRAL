import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerForm, checkEnGame } from "./logic/board.js"
import{WinnerModal} from "./components/WinnerModal.jsx"


function App() {

  const [board, setBoard]= useState(()=>{Array(9).fill(null)
)

 const[turn, setTurn]= useState(TURNS.X)
 // null no hay ganador, false es que hay empate
const[winner, setWinner]= useState(null)




const resetGame=()=>{
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}



 const updateBoard=(index)=>{

  if (board[index] || winner) return
  // actulizar el tablero 
  const newBoard=[...board]
  newBoard[index]=turn
  setBoard(newBoard)
  //cambiar el turno
  const newTurn=turn===TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
  // guardaar aqui partida 
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', turn)
  // revisar si hay un ganador
  const newWinner=checkWinnerForm(newBoard)
  if (newWinner){

  confetti()
    setWinner(newWinner)
  } else if (checkEnGame(newBoard)){
    setWinner(false)// empate

    
  }
}


 

  return (
    <main className="board">
      <h1> tres en raya</h1>
      <button onClick={resetGame}> Reset del juego </button>
      <section className="game">
        {
          board.map((square, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
          </section>
          <section className="turn">
            <Square isSelected={turn === TURNS.X}>
              {TURNS.X}
              </Square>
              <Square isSelected={turn === TURNS.O}>
              {TURNS.O}
              </Square>
            </section>

            <WinnerModal resetGame={resetGame}winner={winner}/>
          </main>
  )
     
}
    
export default App