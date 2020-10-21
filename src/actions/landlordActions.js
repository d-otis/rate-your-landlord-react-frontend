export function fetchLandlords() {
  return (dispatch) => {
    console.log(dispatch)
    dispatch({type: 'LOADING_LANDLORDS'})
    fetch('http://localhost:3000/api/v1/landlords')
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_LANDLORDS', landlords: json.data}))
      .catch(err => console.log(err))
  }
 }