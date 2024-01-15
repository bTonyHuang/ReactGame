// Board.js by Tony
import React from "react";
import Square from "./Square";
import { calculateWinner } from "./utils.js";

// middle level component: board
function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  // HUD status
  let status;
  status = winner
    ? "Winner is : " + winner
    : "NextPlayer is : " + (xIsNext ? "X" : "O");

  // handleClick function
  function handleClick(index){
    const nextSquares = squares.slice();
    // check if the game is over or the square is not empty
    if (calculateWinner(nextSquares) || nextSquares[index]) {
      return;
    }
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
