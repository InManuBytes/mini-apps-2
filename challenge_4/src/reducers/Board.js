/* eslint-disable no-unused-vars */
import Redux from 'redux';

const boardReducer = (state = [], action) => {
  if (action.type === 'CHANGE_BOARD') {
    return action.board;
  } else {
    return state;
  }
};

export default boardReducer;
