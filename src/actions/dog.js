import { API_BASE_URL } from '../config';

//GET dog actions

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

//async fetch dog call
export const fetchDog = () => (dispatch, getState) => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/dog`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(dog => {
    dispatch(fetchDogSuccess(dog));
  }).catch(err => {
    dispatch(fetchDogError(err));
  })
}

//DELETE dog actions (cat has been adopted)
export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const deleteDogRequest = () => ({
  type: DELETE_DOG_REQUEST
})

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = () => ({
  type: DELETE_DOG_SUCCESS,
  // cat
})

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = (error) => ({
  type: DELETE_DOG_ERROR,
  error
})

//async delete dog call
export const deleteDog = () => dispatch => {
  dispatch(deleteDogRequest());
  fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE'
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(dog => {
    dispatch(deleteDogSuccess());
  }).then(() => dispatch(fetchDog()))
  .catch(err => {
    dispatch(fetchDogError(err));
  })
}