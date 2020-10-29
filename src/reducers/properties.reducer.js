export default function propertiesReducer(
  state = [],
  action
) {
  let propertyJSON
  switch (action.type) {
    case 'LOADING_PROPERTIES':
      return state
    case 'SET_PROPERTIES':
      const properties = action.payload.data

      return properties.map(property => {
        return({
          id: property.id,
          address: property.attributes.address,
          reviews: property.relationships.reviews.data,
          landlordId: property.attributes.landlord_id,
          imageUrl: property.attributes.image_url,
          hasImage: property.attributes.has_image
        })
      })

    case "ADD_PROPERTY":
      propertyJSON = action.payload.data
      
      const property = {
        id: propertyJSON.id,
        address: propertyJSON.attributes.address,
        reviews: propertyJSON.relationships.reviews.data,
        landlordId: propertyJSON.attributes.landlord_id,
        imageUrl: propertyJSON.attributes.image_url,
        hasImage: propertyJSON.attributes.has_image
      }

      return state.concat(property)
    default:
      return state
  }
}