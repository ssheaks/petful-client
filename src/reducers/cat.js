

import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, DELETE_CAT_REQUEST, DELETE_CAT_SUCCESS, DELETE_CAT_ERROR } from '../actions/index';

const initialState = {
  data: null,
  loading: false,
  error: null
}

const catReducer = (state = initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    });
  }
  if (action.type === DELETE_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === DELETE_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  }
  if (action.type === DELETE_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    });
  }
  console.log(state);
  return state
}

export default catReducer;
