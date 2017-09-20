import VillageAPI from './VillageAPI';

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
const fetchToyItems = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(items => {
      dispatch(success('FETCH_TOY_ITEMS', items))
    })
  }
}

//FETCH_MATCH_ITEMS for Matching Game
const fetchItems = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(items => {
      dispatch(success('FETCH_MATCH_ITEMS', items))
    })
  }
}

//FETCH_RECYCLE_ITEMS for RECYCLE Game
const fetchRItems = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(items => {
      dispatch(success('FETCH_RECYCLE_ITEMS', items))
    })
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