import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  laboratoryData: null,
  laboratoryListData: [],
  loading: false
}

const postLaboratoryData = (state, action) => {
  return updateObject(state, { laboratoryData: action.laboratoryData })
}

const postLaboratoryDataFailed = (state, action) => {
  return updateObject(state)
}

const fetchLaboratoryDataStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const setLaboratoryData = (state, action) => {
  return updateObject(state, {
    laboratoryListData: action.laboratoryListData,
    loading: false
  })
}

const fetchLaboratoryDataFailed = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_LABORATORY_DATA:
      return postLaboratoryData(state, action)
    case actionTypes.POST_LABORATORY_DATA_FAILED:
      return postLaboratoryDataFailed(state, action)
    case actionTypes.FETCH_LABORATORY_DATA_START:
      return fetchLaboratoryDataStart(state, action)
    case actionTypes.SET_LABORATORY_DATA:
      return setLaboratoryData(state, action)
    case actionTypes.FETCH_LABORATORY_DATA_FAILED:
      return fetchLaboratoryDataFailed(state, action)
    default: return state;
  }
}

export default reducer;