import { useState } from "react"
import confetti from "canvas-confetti"

const TURNS={
X:'x',
O:'o'
}



const Square =({ children, isSelected, updateBoard, index})=>{
  const className=`square ${isSelected ? 'is-selected' : ''}`
  const handleClick=()=>{
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className={className} >
    {children}
    </div>
  )
}

const WINNER_COMBOS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard]= useState
  (Array(9).fill(null)
)

 const[turn, setTurn]= useState(TURNS.X)
 // null no hay ganador, false es que hay empate
const[winner, setWinner]= useState(null)

const checkWinner= (boardToCheck)=>{
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


const resetGame=()=>{
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

const checkEnGame=(newBoard)=>{
// revisar si hay un empate
// si no hay mas espacios vacios
// en el tablero

  return newBoard.every((square)=> square !== null)
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
  // revisar si hay un ganador
  const newWinner=checkWinner(newBoard)
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

            {
            winner!== null  &&(
              <section className="winner">
                <div className="text">
                  <h2>
                    {
                      winner === false
                      ? 'Empate'
                      : 'Ganó:'
                    }
                   

                  </h2>

                  <header className="win">
                    {winner && <Square>{ winner}</Square>}
                    </header>
                    <footer>
                      <button onClick={resetGame}>
                  volver a jugar
                      </button>
                    </footer>

                  </div>
              </section>
            ) 
            }
          </main>
  )
     
}
    
export default App