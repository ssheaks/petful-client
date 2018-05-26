import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, DELETE_DOG_REQUEST, DELETE_DOG_SUCCESS, DELETE_DOG_ERROR } from '../actions/index';

const initialState = {
  data: null,
  loading: false,
  error: null
}

const dogReducer = (state = initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    });
  }
  if (action.type === DELETE_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === DELETE_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  }
  if (action.type === DELETE_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: true
    });
  }
  // console.log(state);
  return state
}

export default dogReducer;
