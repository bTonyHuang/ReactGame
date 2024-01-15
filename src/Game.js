// Game.js by Tony
import React, { useState } from "react";
import Board from "./Board";

function Game() {
  // represent with 3x3 2D array
  // const initialSquares = Array.from({ length: 3 }, () => Array(3).fill(null));
  const initialSquares = Array(9).fill(null);

  //array for history
  const [history, setHistory] = useState([initialSquares]);

  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const currentSquares = history[currentMoveIndex];
  const xIsNext = !(currentMoveIndex % 2);

  function handlePlay(nextSquares) {
    //save history
    const nextHistory = [
      ...history.slice(0, currentMoveIndex + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    setCurrentMoveIndex(currentMoveIndex + 1);
  }

  function jumpTo(moveIndex) {
    setCurrentMoveIndex(moveIndex);
  }

  const moves = history.map((squares, moveIndex) => {
    let description;
    if (moveIndex > 0) {
      description = "Go to move #" + moveIndex;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={moveIndex}>
        <button onClick={() => jumpTo(moveIndex)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
