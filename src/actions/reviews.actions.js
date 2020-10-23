export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: 'LOADING_REVIEWS'})
    fetch('http://localhost:3000/api/v1/reviews')
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_REVIEWS', payload: json}))
      .catch(err => console.log(err))
  }
}