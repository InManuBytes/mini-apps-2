import _ from 'lodash';

const makeNewBoard = (n) => {
  return (_.range(n)).map(() => {
    return (_.range(n)).map(() => {
      return 0
    })
  })
}

export default makeNewBoard;