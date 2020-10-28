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

 export function createLandlord(landlord) {
  const config = {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({landlord: {name: landlord}})
  }

  return (dispatch) => {
    fetch(`${BASE_URL}/landlords`, config)
      .then(res => res.json())
      .then(json => dispatch({type: 'ADD_LANDLORD', payload: json}))
      .catch(err => console.log('this is an error:', err))
  }
 }

 export function updateLandlord(landlord) {
  
  debugger
  return dispatch => {
    fetch(`${BASE_URL}/landlords/${landlord.id}`, config)
  }
 }

 export function deleteLandlord(landlord) {
  return dispatch => {
    fetch(`${BASE_URL}/landlords`, config)
  }
 }