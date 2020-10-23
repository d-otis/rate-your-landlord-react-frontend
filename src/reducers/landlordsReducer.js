export default function landlordsReducer(
  state = [],
  action
) {
  switch (action.type) {
    case 'LOADING_LANDLORDS':
      return state
    case 'SET_LANDLORDS':
      const landlords = action.payload.data
      
      return landlords.map(landlord => {
        return ({
          id: landlord.id, 
          name: landlord.attributes.name, 
          reviews: landlord.relationships.reviews.data, 
          properties: landlord.relationships.properties.data,
          rating: landlord.attributes.aggregate_rating
        })
      })
    default:
      return state
  }
}