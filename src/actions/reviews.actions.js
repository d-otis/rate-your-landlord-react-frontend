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