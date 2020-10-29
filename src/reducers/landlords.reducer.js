export default function landlordsReducer(
  state = [],
  action
) {
  let landlord
  switch (action.type) {
    case 'LOADING_LANDLORDS':
    console.log('LOADING_LANDLORDS', action)
      return state
    case 'SET_LANDLORDS':
      const landlords = action.payload.data
      console.log('SET_LANDLORDS', action)
      return landlords.map(landlord => {
        return ({
          id: landlord.id, 
          name: landlord.attributes.name, 
          reviews: landlord.relationships.reviews.data, 
          properties: landlord.relationships.properties.data,
          rating: landlord.attributes.rating
        })
      })

    case "ADD_LANDLORD":
      // const landlord = action.payload.data
      landlord = action.payload.data

      return state.concat({
        // refactor this repeated code
        id: landlord.id, 
        name: landlord.attributes.name, 
        reviews: landlord.relationships.reviews.data, 
        properties: landlord.relationships.properties.data,
        rating: landlord.attributes.rating
      })

    default:
      return state
  }
}