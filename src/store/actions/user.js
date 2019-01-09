import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const setUserData = (userData) => {
  return {
    type: actionTypes.SET_USER_DATA,
    userData: userData
  }
}

export const fetchUserDataFailed = () => {
  return {
    type: actionTypes.FETCH_USER_DATA_FAILED
  }
}

export const initUserData = (token, userId) => {
  return dispatch => {
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    axios.get('https://medkit-react-app.firebaseio.com/users.json' + queryParams)
      .then(response => {
        dispatch(setUserData(response.data))
      })
      .catch(error => {
        dispatch(fetchUserDataFailed())
      })
  }
}