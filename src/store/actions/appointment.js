import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import { fetchUserDataFailed } from './user';

export const setAppointmentData = (appointmentData) => {
  return {
    type: actionTypes.SET_APPOINTMENT_DATA,
    appointmentData: appointmentData
  }
}

export const setAppointmentDataFailed = () => {
  return {
    type: actionTypes.SET_APPOINTMENT_DATA_FAILED
  }
}

export const initAppointmentData = (token, userId, appointmentData) => {
  return dispatch => {
    const axiosData = {
      appointmentData,
      userId: userId
    }
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    axios.post('appointments.json', axiosData)
      .then(response => {
        dispatch(setAppointmentData(response.data))
      })
      .catch(err => {
        dispatch(fetchUserDataFailed())
      })
  }
}