import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  prescriptionsListData: [],
  loading: false
}

const fetchPrescriptionDataStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const setPrescriptionData = (state, action) => {
  return updateObject(state, {
    prescriptionsListData: action.prescriptionsListData,
    loading: false
  })
}

const fetchPrescriptionDataFailed = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRESCRIPTION_DATA_START:
      return fetchPrescriptionDataStart(state, action)
    case actionTypes.SET_PRESCRIPTION_DATA:
      return setPrescriptionData(state, action)
    case actionTypes.FETCH_PRESCRIPTION_DATA_FAILED:
      return fetchPrescriptionDataFailed(state, action)
    default: return state
  }
}

export default reducer;