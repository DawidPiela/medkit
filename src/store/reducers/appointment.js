import * as actionTypes from '../actions/actionTypes';

const initialState = {
  appointmentData: null,
  appointmentsListData: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_APPOINTMENT_DATA: return { ...state, appointmentData: action.appointmentData }
    case actionTypes.POST_APPOINTMENT_DATA_FAILED: return { ...state }
    case actionTypes.SET_APPOINTMENT_DATA: return { ...state, appointmentsListData: action.appointmentsListData }
    case actionTypes.FETCH_APPOINTMENT_DATA_FAILED: return { ...state }
    default: return state;
  }
}

export default reducer;