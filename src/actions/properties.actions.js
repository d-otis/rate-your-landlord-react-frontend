import { BASE_URL } from '../utils/baseURL'

export function fetchProperties() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PROPERTIES'})
    fetch(`${BASE_URL}/properties`)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_PROPERTIES', payload: json}))
      .catch(err => console.log(err))
  }
}

export function createProperty(property) {
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({property: {address: property.address, image_url: property.imageUrl ,landlord_id: property.landlordId} })
  }

  return dispatch => {
    fetch(`${BASE_URL}/properties`, config)
      .then(res => res.json())
      .then(json => dispatch({type: "ADD_PROPERTY", payload: json}))
      .catch(err => console.error(err))
  }
}