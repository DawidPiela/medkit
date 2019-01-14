import * as actionTypes from '../actions/actionTypes';

const initialState = {
  appointmentData: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_APPOINTMENT_DATA: return { ...state, appointmentData: action.appointmentData }
    case actionTypes.SET_APPOINTMENT_DATA_FAILED: return { ...state }
    default: return state;
  }
}

export default reducer;