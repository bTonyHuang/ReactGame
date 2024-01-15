// utils.js by Tony
export function calculateWinner(squares) {
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
}
