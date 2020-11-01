import { BASE_URL } from '../utils/baseURL'

export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: 'LOADING_REVIEWS'})
    fetch(`${BASE_URL}/reviews`)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_REVIEWS', payload: json}))
      .catch(err => console.log(err))
  }
}