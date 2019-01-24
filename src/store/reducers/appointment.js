import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  appointmentData: null,
  appointmentsListData: [],
  loading: false
}

const postAppointmentData = (state, action) => {
  return updateObject(state, { appointmentData: action.appointmentData })
}

const postAppointmentDataFailed = (state, action) => {
  return updateObject(state)
}

const fetchAppointmentDataStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const setAppointmentData = (state, action) => {
  return updateObject(state, {
    appointmentsListData: action.appointmentsListData,
    loading: false
  })
}

const fetchAppointmentDataFailed = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_APPOINTMENT_DATA:
      return postAppointmentData(state, action)
    case actionTypes.POST_APPOINTMENT_DATA_FAILED:
      return postAppointmentDataFailed(state, action)
    case actionTypes.FETCH_APPOINTMENT_DATA_START:
      return fetchAppointmentDataStart(state, action)
    case actionTypes.SET_APPOINTMENT_DATA:
      return setAppointmentData(state, action)
    case actionTypes.FETCH_APPOINTMENT_DATA_FAILED:
      return fetchAppointmentDataFailed(state, action)
    default: return state;
  }
}

export default reducer;