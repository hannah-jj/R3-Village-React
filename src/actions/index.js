import VillageAPI from './VillageAPI';

const toys = [{id: 1,name: "ball",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/ball.png"},
{id: 2,name: "bear",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/bear.png"},
{id: 3,name: "cube",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/cube.png"},
{id: 4,name: "egame",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/egame.png"},
{id: 5,name: "robot",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/robot.png"},
{id: 6,name: "xylophone",picture: "https://s3.us-east-2.amazonaws.com/r3-village/items/xylophone.png"}]

const items = [{id: 1,name: "bottle",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/bottle.png"},
{id: 2,name: "cardboard",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/cardboard.png"},
{id: 3,name: "ewaste",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/ewaste.png"},
{id: 4,name: "food",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/food.png"},
{id: 5,name: "plastic",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/plastic.png"},
{id: 6,name: "waste",picture: "https://s3.us-east-2.amazonaws.com/r3-village/ingredients/waste.png"}]

//success msgs and payloads for reducer
function success(msg, payload) {
  return {type: msg, payload: payload};
}

//fetch users from users index api
const fetchUsers = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(users => {
      dispatch(success('FETCH_USERS', users))
    })
  }
}

//fetch all the active boxes from an user
const fetchBoxes = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(user => {
      dispatch(success('FETCH_BOXES', user.active_boxes))
    })
  }
}

//add box
const addBox = (url, info) => {
  return function(dispatch) {
    return VillageAPI.addInfo(url, info)
      .then(user => { 
      dispatch(success('FETCH_BOXES', user.active_boxes))
    })
  }
}

//update box and fetch all the active boxes from an user
const updateBox = (url, info) => {
  return function(dispatch) {
    return VillageAPI.updateInfo(url, info)
      .then(user => {
      dispatch(success('FETCH_BOXES', user.active_boxes))
    })
  }
}

//add User
const addUser = (url, info) => {
  return function(dispatch) {
    return VillageAPI.addInfo(url, info)
      .then(user => {
      dispatch(success('ADD_USER', user))
    })
  }
}

//update User
const updateUser = (url, info) => {
  return function(dispatch) {
    return VillageAPI.updateInfo(url, info)
      .then(user => {
      dispatch(success('UPDATE_USER', user))
    })
  }
}

//FETCH_TOY_ITEMS for adding new toy
const fetchToyItems = () => {
  return function(dispatch) {
    return dispatch(success('FETCH_TOY_ITEMS', toys))
  }
}

//FETCH_MATCH_ITEMS for Matching Game
const fetchItems = () => {
  return function(dispatch) {
    return dispatch(success('FETCH_MATCH_ITEMS', toys))
  }
}

//FETCH_RECYCLE_ITEMS for RECYCLE Game
const fetchRItems = () => {
  return function(dispatch) {
    return dispatch(success('FETCH_RECYCLE_ITEMS', items))
  }
}


export {
  fetchUsers,
  fetchBoxes,
  updateBox,
  addBox,
  addUser,
  updateUser,
  fetchToyItems,
  fetchItems,
  fetchRItems
}