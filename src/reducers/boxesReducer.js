export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_BOXES':
      let boxes = action.payload;
      let l = 9 - boxes.length;
      for (let i = 0; i < l; i++) {
        boxes.push({box_id: null, name: "default", picture: "/defaults/default.png"})
      }
  	  return boxes;
    default:
      return state;
  }
};