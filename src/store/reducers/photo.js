import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  photoUrl: ''
}

const uploadPhotoStart = (state, action) => {
  return updateObject(state)
}

const uploadPhoto = (state, action) => {
  return updateObject(state)
}

const setPhoto = (state, action) => {
  return updateObject(state, {
    photoUrl: action.photoUrl
  })
}

const setPhotoUrl = (state, action) => {
  return updateObject(state, {
    photoUrl: action.photoUrl
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PHOTO_START: return uploadPhotoStart(state, action)
    case actionTypes.UPLOAD_PHOTO: return uploadPhoto(state, action)
    case actionTypes.SET_PHOTO: return setPhoto(state, action)
    case actionTypes.SET_PHOTO_URL: return setPhotoUrl(state, action)
    default: return state;
  }
}

export default reducer;