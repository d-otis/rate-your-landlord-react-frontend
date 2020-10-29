export default function landlordsReducer(
  // REFACTOR: so that state is an object and memoized using landlord ids
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
        // refactor this repeated code
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

    case "UPDATE_LANDLORD":
      // find the record and replace it with this returned JSON
      const index = state.findIndex(landlord => landlord.id === action.payload.data.id)

      landlord = action.payload.data

      const updatedLandlord = {
        id: landlord.id, 
        name: landlord.attributes.name, 
        reviews: landlord.relationships.reviews.data, 
        properties: landlord.relationships.properties.data,
        rating: landlord.attributes.rating
      }

      return [
        ...state.slice(0, index), 
        updatedLandlord, 
        ...state.slice(index + 1)
      ]

    default:
      return state
  }
}