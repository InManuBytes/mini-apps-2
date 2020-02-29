import React from 'react';
import _ from 'lodash';

const Board = ({board}) => {
  const newBoard = makeNewBoard(10); // start with 10
  console.log(newBoard);
  return (
    <table className="board">
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