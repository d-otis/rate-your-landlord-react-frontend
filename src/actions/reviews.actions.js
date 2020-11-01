import { BASE_URL } from '../utils/baseURL'

const REVIEWS_PATH = BASE_URL + '/reviews'

export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: 'LOADING_REVIEWS'})
    fetch(REVIEWS_PATH)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_REVIEWS', payload: json}))
      .catch(err => console.log(err))
  }
}

export function createReview({ content, rating, property_id }) {
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({review: { content, rating, landlord_id }})
  }
  debugger
  return dispatch => {
    fetch(REVIEWS_PATH, config)
      .then(res => res.json())
      .then(json => dispatch({type: 'ADD_REVIEW', payload: json}))
      .catch(err => console.error(err))
  }
}