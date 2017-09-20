export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_USERS':
  	  return action.payload;  
  	case 'ADD_USER':
  	  return [...state, action.payload];
  	 case 'UPDATE_USER':
  	  let index = state.findIndex( user => user.id == action.payload.id );
  	  return Object.assign([...state], {[index]: action.payload} );
    default:
      return state;
  }
};