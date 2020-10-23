export default function propertiesReducer(
  state = [],
  action
) {
  console.log('action is: ', action)
  switch (action.type) {
    case 'LOADING_PROPERTIES':
      console.log('properties are loading')
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
    default:
      return state
  }
}