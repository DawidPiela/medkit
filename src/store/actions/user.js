import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import firebase from '../../firebase';

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
    axios.get('users.json' + queryParams)
      .then(response => {
        dispatch(setUserData(response.data))
      })
      .catch(err => {
        dispatch(fetchUserDataFailed())
      })
  }
}

export const updateUserData = () => {
  return {
    type: actionTypes.UPDATE_USER_DATA
  }
}

export const updateUserDataStart = () => {
  return {
    type: actionTypes.UPDATE_USER_DATA_START
  }
}

export const updateUserDataFailed = () => {
  return {
    type: actionTypes.UPDATE_USER_DATA_FAILED
  }
}

export const patchUserData = (userId, userData) => {
  return dispatch => {
    dispatch(updateUserDataStart())
    let database = firebase.database()
    console.log(userData.firstName, userData.lastName)
    database.ref('users/' + userId).update({
      firstName: userData.firstName,
      lastName: userData.lastName
    }, (error) => {
      if (error) {
        dispatch(updateUserDataFailed())
      } else {
        dispatch(updateUserData())
      }
    })
  }
}