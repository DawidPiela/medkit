import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const postAppointmentData = (appointmentData) => {
  return {
    type: actionTypes.POST_APPOINTMENT_DATA,
    appointmentData: appointmentData
  }
}

export const postAppointmentDataFailed = () => {
  return {
    type: actionTypes.POST_APPOINTMENT_DATA_FAILED
  }
}

export const initAppointmentData = (userId, appointmentData) => {
  return dispatch => {
    const axiosData = {
      appointmentData,
      userId: userId
    }
    axios.post('appointments.json', axiosData)
      .then(response => {
        dispatch(postAppointmentData(response.data))
      })
      .catch(err => {
        dispatch(postAppointmentDataFailed())
      })
  }
}

export const setAppointmentData = (appointmentsListData) => {
  return {
    type: actionTypes.SET_APPOINTMENT_DATA,
    appointmentsListData: appointmentsListData
  }
}

export const fetchAppointmentDataFailed = () => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_DATA_FAILED
  }
}

export const fetchAppointmentData = (token, userId) => {
  return dispatch => {
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    axios.get('/appointments.json' + queryParams)
      .then(response => {
        dispatch(setAppointmentData(response.data))
      })
      .catch(err => {
        dispatch(fetchAppointmentDataFailed())
      })
  }
}