import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const postLaboratoryData = (laboratoryData) => {
  return {
    type: actionTypes.POST_LABORATORY_DATA,
    laboratoryData: laboratoryData
  }
}

export const postLaboratoryDataFailed = () => {
  return {
    type: actionTypes.POST_LABORATORY_DATA_FAILED
  }
}

export const initLaboratoryData = (userId, laboratoryData, token) => {
  return dispatch => {
    const axiosData = {
      laboratoryData,
      userId: userId
    }
    axios.post('laboratory.json', axiosData)
      .then(response => {
        dispatch(postLaboratoryData(response.data))
        dispatch(fetchLaboratoryData(token, userId))
      })
      .catch(err => {
        dispatch(postLaboratoryDataFailed())
      })
  }
}

export const fetchLaboratoryDataStart = () => {
  return {
    type: actionTypes.FETCH_LABORATORY_DATA_START
  }
}

export const setLaboratoryData = (laboratoryListData) => {
  return {
    type: actionTypes.SET_LABORATORY_DATA,
    laboratoryListData: laboratoryListData
  }
}

export const fetchLaboratoryDataFailed = () => {
  return {
    type: actionTypes.FETCH_LABORATORY_DATA_FAILED
  }
}

export const fetchLaboratoryData = (token, userId) => {
  return dispatch => {
    dispatch(fetchLaboratoryDataStart())
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    axios.get('/laboratory.json' + queryParams)
      .then(response => {
        const fetchedLaboratory = []
        for (let key in response.data) {
          fetchedLaboratory.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(setLaboratoryData(fetchedLaboratory))
      })
      .catch(err => {
        dispatch(fetchLaboratoryDataFailed())
      })
  }
}