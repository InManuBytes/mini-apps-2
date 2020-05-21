import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main';
import makeNewBoard from './utils';

const store = createStore(
  rootReducer,
  // initial state
  {
    currentBoard: makeNewBoard(10) // hard-code 10
  },
  applyMiddleware(thunk)
);

export default store;