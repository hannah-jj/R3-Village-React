import * as arrayMutater from '../actions/arrayMutater';

export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_MATCH_ITEMS':
  	  return arrayMutater.doubleNShuffle(action.payload);
    case 'FETCH_RECYCLE_ITEMS':
      return arrayMutater.populateArray(action.payload, 32);
    case 'FETCH_TOY_ITEMS':
      return action.payload; 
    default:
      return state;
  }
};

