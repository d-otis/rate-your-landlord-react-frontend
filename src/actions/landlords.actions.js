export function fetchLandlords() {
  return (dispatch) => {
    dispatch({type: 'LOADING_LANDLORDS'})
    fetch('http://localhost:3000/api/v1/landlords')
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_LANDLORDS', payload: json}))
      .catch(err => console.log(err))
  }
 }

 export function createLandlord() {
  return null
 }