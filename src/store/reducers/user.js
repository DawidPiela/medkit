import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  userData: null
}

const setUserData = (state, action) => {
  return updateObject(state, {
    userData: action.userData
  })
}

const fetchUserDataFailed = (state, action) => {
  return updateObject(state)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA: return setUserData(state, action)
    case actionTypes.FETCH_USER_DATA_FAILED: return fetchUserDataFailed(state, action)
    default: return state;
  }
}

export default reducer;