import React from 'react';

const Board = ({board}) => {
  return (
    <table className="board">
      <tbody>
        {board.map((row, rowIdx) => {
          return (
            <tr key={rowIdx}>
              {row.map((square, colIdx) => {
                return (
                  <td key={colIdx}>{square}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Board;