import { formatRating } from '../utils/misc.util'

export default function propertiesReducer(
  state = {},
  action
) {
  let propertyJSON
  let stateCopy
  switch (action.type) {
    case 'LOADING_PROPERTIES':
      return state
    case 'SET_PROPERTIES':
      const properties = action.payload.data

      return {
        ...state,
        ...properties.reduce((newObj, eleObj) => {
          newObj[eleObj.id] = {
            id: eleObj.id,
            address: eleObj.attributes.address,
            reviews: eleObj.relationships.reviews.data,
            landlordId: eleObj.attributes.landlord_id,
            imageUrl: eleObj.attributes.image_url,
            hasImage: eleObj.attributes.has_image,
            rating: formatRating(eleObj.attributes.rating)
          }
          return newObj
        }, {})
      }

    case "ADD_PROPERTY":
      propertyJSON = action.payload.data

      let newProperty = {
        id: propertyJSON.id,
        address: propertyJSON.attributes.address,
        reviews: propertyJSON.relationships.reviews.data,
        landlordId: propertyJSON.attributes.landlord_id,
        imageUrl: propertyJSON.attributes.image_url,
        hasImage: propertyJSON.attributes.has_image,
        rating: formatRating(propertyJSON.attributes.rating)
      }

      stateCopy = Object.assign({}, state)
      stateCopy[newProperty.id] = newProperty

      return stateCopy

    default:
      return state
  }
}