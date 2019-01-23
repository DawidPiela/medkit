import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import firebase from '../../firebase';

export const uploadPhotoStart = () => {
  return {
    type: actionTypes.UPLOAD_PHOTO_START
  }
}

export const uploadPhoto = () => {
  return {
    type: actionTypes.UPLOAD_PHOTO
  }
}

export const setPhoto = (photoUrl) => {
  return {
    type: actionTypes.SET_PHOTO,
    photoUrl: photoUrl
  }
}

export const setPhotoUrl = (photoUrl, token, userId) => {
  return dispatch => {
    let database = firebase.database()
    if (photoUrl) {
      database.ref('users/' + userId + '/imgUrl').set(photoUrl)
      dispatch(setPhoto(photoUrl))
    } else {
      const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
      axios.get('users.json' + queryParams)
        .then(response => {
          const fetchedPhotoUrl = []
          for (let key in response.data) {
            fetchedPhotoUrl.push({
              ...response.data[key],
              id: key
            })
          }
          dispatch(setPhoto(fetchedPhotoUrl[0].imgUrl))
        })
        .catch(err => {
        })
    }
  }
}

export const initPhotoUpload = (photoFile, token, userId) => {
  return dispatch => {
    dispatch(uploadPhotoStart())
    let storage = firebase.storage()
    let storageRef = storage.ref()
    let uniqueFileName = new Date().getTime().toString()
    let uploadTask = storageRef.child('images/' + uniqueFileName)

    uploadTask.put(photoFile).then(function (result) {
      uploadTask.getDownloadURL().then(function (result) {
        dispatch(setPhotoUrl(result, token, userId))
        dispatch(uploadPhoto())
      })
    })
  }
}