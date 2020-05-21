import { combineReducers } from 'redux';
import boardReducer from './Board';

var rootReducer = combineReducers({
  currentBoard: boardReducer,
})

export default rootReducer;