import { formatRating } from '../utils/misc.util'

export default function landlordsReducer(
  // REFACTOR: so that state is an object and memoized using landlord ids
  state = {},
  action
) {
  let landlord
  let stateCopy
  let newRating
  let propertyId
  let landlordId
  switch (action.type) {
    case 'LOADING_LANDLORDS':

      return state

    case 'SET_LANDLORDS':
      const landlords = action.payload.data

      return {
        ...state,
        ...landlords.reduce((newObj, eleObj) => {
          newObj[eleObj.id] = {
            id: eleObj.id,
            name: eleObj.attributes.name,
            rating: formatRating(eleObj.attributes.rating),
            reviews: eleObj.relationships.reviews.data,
            properties: eleObj.relationships.properties.data
          }
          return newObj
        }, {})
      }

    case "ADD_LANDLORD":
      // const landlord = action.payload.data
      landlord = action.payload.data

      let newLandlord = {
        id: landlord.id, 
        name: landlord.attributes.name, 
        reviews: landlord.relationships.reviews.data, 
        properties: landlord.relationships.properties.data,
        rating: formatRating(landlord.attributes.rating)
      }

      stateCopy = Object.assign({}, state)
      stateCopy[newLandlord.id] = newLandlord

      return stateCopy

    case "UPDATE_LANDLORD":

    landlord = action.payload.data

    const updatedLandlord = {
      id: landlord.id, 
      name: landlord.attributes.name, 
      reviews: landlord.relationships.reviews.data, 
      properties: landlord.relationships.properties.data,
      rating: landlord.attributes.rating
    }

      stateCopy = Object.assign({}, state)

      stateCopy[landlord.id] = updatedLandlord

      return stateCopy

    case "DELETE_LANDLORD":
      let deletedLandlordId = action.payload.data.id
      stateCopy =  Object.assign({}, state)

      delete stateCopy[deletedLandlordId]
      
      return stateCopy

    case "ADD_REVIEW":
      landlordId = action.payload.data.attributes.landlord_id
      let landlordRating = formatRating(action.payload.data.attributes.landlord_rating)
      let reviewId = action.payload.data.id
      
      stateCopy = Object.assign({}, state)
      stateCopy[landlordId].rating = landlordRating
      stateCopy[landlordId].reviews.concat({id: reviewId, type: "review"})

      return stateCopy

    default:
      return state
  }
}