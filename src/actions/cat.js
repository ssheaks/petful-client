import { API_BASE_URL } from '../config';

//GET cat actions

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
})

//async fetch cat call
export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch('/cat').then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cat => {
    dispatch(fetchCatSuccess(cat));
  }).catch(err => {
    dispatch(fetchCatError(err));
  })
}

//DELETE cat actions (cat has been adopted)
export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
})

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = () => ({
  type: DELETE_CAT_SUCCESS,
  // cat
})

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: DELETE_CAT_ERROR,
  error
})

//async delete cat call
export const deleteCat = () => dispatch => {
  dispatch(deleteCatRequest());
  fetch('/cat', {
    method: 'DELETE'
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cat => {
    dispatch(deleteCatSuccess());
  }).then(() => dispatch(fetchCat()))
  .catch(err => {
    dispatch(fetchCatError(err));
  })
}

