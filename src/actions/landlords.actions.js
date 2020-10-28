const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchLandlords() {
  return (dispatch) => {
    dispatch({type: 'LOADING_LANDLORDS'})
    fetch(`${BASE_URL}/landlords`)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_LANDLORDS', payload: json}))
      .catch(err => console.log(err))
  }
 }

 export function createLandlord() {
  return null
 }