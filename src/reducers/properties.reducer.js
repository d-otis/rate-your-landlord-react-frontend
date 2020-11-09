import { formatRating } from '../utils/misc.util'

export default function propertiesReducer(
  state = {},
  action
) {
  let propertyJSON
  let stateCopy
  let newProperty
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

      newProperty = {
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

    case "ADD_REVIEW":
      let reviewId = action.payload.data.id
      let propertyId = action.payload.data.attributes.property_id
      let propertyRating = formatRating(action.payload.data.attributes.property_rating)
      
      stateCopy = Object.assign({}, state)

      stateCopy[propertyId].rating = propertyRating

      stateCopy[propertyId].reviews = [
        ...stateCopy[propertyId].reviews,
        {id: reviewId, type: "review"}
      ]

      return stateCopy

    case 'ADD_LANDLORD':
      // Parse through returned JSON and 
      // add property data from returned new Landlord
      // ass to properties!
      propertyJSON = action.payload.included[0]

      newProperty = {
        id: propertyJSON.id,
        address: propertyJSON.attributes.address,
        reviews: [],
        landlordId: propertyJSON.attributes.landlord_id,
        imageUrl: propertyJSON.attributes.image_url,
        hasImage: propertyJSON.attributes.has_image,
        rating: formatRating(propertyJSON.attributes.rating)
      }

      stateCopy = Object.assign({}, state)
      stateCopy[newProperty.id] = newProperty

      return stateCopy

    case 'DELETE_LANDLORD':
      let landlordId = action.payload.data.id
      let deletedProperties = Object.values(state).filter(properties => properties.landlordId === action.payload.data.id)
      // 1. get list of all landlords properties
      // 2. delete them based on
      stateCopy = Object.assign({}, state)

      deletedProperties.map(property => {
        console.log('inside deletedProperties map, stateCopy: ', stateCopy)
        delete stateCopy[property.id]
      })

      return stateCopy

    default:
      return state
  }
}