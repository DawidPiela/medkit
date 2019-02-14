import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchPrescriptionDataStart = () => {
  return {
    type: actionTypes.FETCH_PRESCRIPTION_DATA_START
  }
}

export const setPrescriptionData = (prescriptionsListData) => {
  return {
    type: actionTypes.SET_PRESCRIPTION_DATA,
    prescriptionsListData: prescriptionsListData
  }
}

export const fetchPrescriptionDataFailed = () => {
  return {
    type: actionTypes.FETCH_PRESCRIPTION_DATA_FAILED
  }
}

export const fetchPrescriptionData = (token, userId) => {
  return dispatch => {
    dispatch(fetchPrescriptionDataStart())
    const queryParams = '?auth=' + token
    axios.get('/prescriptions.json' + queryParams)
      .then(response => {
        const fetchedPrescriptions = []
        for (let key in response.data) {
          fetchedPrescriptions.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(setPrescriptionData(fetchedPrescriptions))
      })
      .catch(err => {
        dispatch(fetchPrescriptionDataFailed())
      })
  }
}