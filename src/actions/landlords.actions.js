import { BASE_URL } from '../utils/baseURL'

export function fetchLandlords() {
  return (dispatch) => {
    dispatch({type: 'LOADING_LANDLORDS'})
    fetch(`${BASE_URL}/landlords`)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_LANDLORDS', payload: json}))
      .catch(err => console.log(err))
  }
 }

 export function createLandlord(landlordData) {
  const config = {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({landlord: landlordData})
  }

  return (dispatch) => {
    fetch(`${BASE_URL}/landlords`, config)
      .then(res => res.json())
      .then(json => dispatch({type: 'ADD_LANDLORD', payload: json}))
      .catch(err => console.log('this is an error:', err))
  }
 }

 export function updateLandlord(landlordId, name) {
  const config = {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({landlord: {name: name}})
  }
  // debugger
  return dispatch => {
    fetch(`${BASE_URL}/landlords/${landlordId}`, config)
      .then(res => res.json())
      .then(json => dispatch({type: "UPDATE_LANDLORD", payload: json}))
      .catch(err => console.error(err))
  }
 }

 export function deleteLandlord(landlordId) {
  const config = {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }
  return dispatch => {
    fetch(`${BASE_URL}/landlords/${landlordId}`, config)
      .then(res => res.json())
      .then(json => dispatch({type: "DELETE_LANDLORD", payload: json}))
      .catch(err => console.error(err))
  }
 }