import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userData: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA: return { ...state, userData: action.userData }
    case actionTypes.FETCH_USER_DATA_FAILED: return { ...state }
    default: return state;
  }
}

export default reducer;