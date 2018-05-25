import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, DELETE_DOG_REQUEST, DELETE_DOG_SUCCESS, DELETE_DOG_ERROR } from '../actions/index';

const initialState = {
  data: [{
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
name: 'Zeus',
sex: 'Male',
age: 3,
breed: 'Golden Retriever',
story: 'Owner Passed away'
  }],
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
      data: action.data,
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
  console.log(state);
  return initialState
}

export default dogReducer;
