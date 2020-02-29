import React from 'react';
import _ from 'lodash';

const Board = ({board}) => {
  const newBoard = board ? board: makeNewBoard(10); // start with 10
  console.log(newBoard);
  return (
    <table className="board">
      {newBoard.map((row, rowIdx) => {
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
    </table>
  );
}

const makeNewBoard = (n) => {
  return (_.range(n)).map(() => {
    return (_.range(n)).map(() => {
      return 0
    })
  })
}

export default Board;