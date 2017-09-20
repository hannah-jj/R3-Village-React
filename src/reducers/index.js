import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import boxesReducer from './boxesReducer';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  boxes: boxesReducer,
  games: gamesReducer
});

export default rootReducer;