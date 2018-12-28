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

export const initUserData = () => {
  return dispatch => {
    axios.get('https://medkit-react-app.firebaseio.com/users.json')
      .then(response => {
        dispatch(setUserData(response.data))
        console.log('axios responded')
      })
      .catch(error => {
        dispatch(fetchUserDataFailed())
        console.log(error)
      })
  }
}