//Square.js by Tony
import React from "react";
// lowest level component: square to show the value
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
