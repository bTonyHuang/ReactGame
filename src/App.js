import React, { useState } from "react";
import PropTypes from "prop-types";

// child component: square to show the value
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
// props check
Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func,
};

// parent component: board
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  status = winner
    ? "Winner is : " + winner
    : "NextPlayer is : " + (xIsNext ? "X" : "O");

  handleClick = (index) => {
    const nextSquares = squares.slice();
    // check if the game is over or the square is not empty
    if (calculateWinner(nextSquares) || nextSquares[index]) {
      return;
    }
    nextSquares[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
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

calculateWinner = (squares) => {
  let length = 3;
  //check rows and cols
  for (let i = 0; i < length; i++) {
    if (
      squares[i * length] &&
      squares[i * length] === squares[i * length + 1] &&
      squares[i * length] === squares[i * length + 2]
    ) {
      return squares[i * length];
    }

    if (
      squares[i] &&
      squares[i] === squares[i + length] &&
      squares[i] === squares[i + 2 * length]
    ) {
      return squares[i];
    }
  }

  //check diagonal
  if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {
    return squares[0];
  } else if (
    squares[2] &&
    squares[2] === squares[4] &&
    squares[2] === squares[6]
  ) {
    return squares[2];
  }

  return null;
};