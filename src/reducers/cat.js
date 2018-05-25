

import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, DELETE_CAT_REQUEST, DELETE_CAT_SUCCESS, DELETE_CAT_ERROR } from '../actions/index';

const initialState = {
  data: [{
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
name: 'Fluffy',
sex: 'Female',
age: 2,
breed: 'Bengal',
story: 'Thrown on the street'
  }],
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
      data: action.data,
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
  return initialState
}

export default catReducer;
