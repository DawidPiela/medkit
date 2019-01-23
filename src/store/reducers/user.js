import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  userData: null,
  loading: false
}

const setUserData = (state, action) => {
  return updateObject(state, {
    userData: action.userData
  })
}

const fetchUserDataFailed = (state, action) => {
  return updateObject(state)
}

const updateUserData = (state, action) => {
  return updateObject(state, {
    loading: false
  })
}

const updateUserDataStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const updateUserDataFailed = (state, action) => {
  return updateObject(state, {
    loading: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA: return setUserData(state, action)
    case actionTypes.FETCH_USER_DATA_FAILED: return fetchUserDataFailed(state, action)
    case actionTypes.UPDATE_USER_DATA: return updateUserData(state, action)
    case actionTypes.UPDATE_USER_DATA_START: return updateUserDataStart(state, action)
    case actionTypes.UPDATE_USER_DATA_FAILED: return updateUserDataFailed(state, action)
    default: return state;
  }
}

export default reducer;