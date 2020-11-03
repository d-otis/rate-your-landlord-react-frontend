export default function reviewsReducer(
  state = {},
  action
  ) {
  switch (action.type) {
    case 'LOADING_REVIEWS':
      return state
    case 'SET_REVIEWS':
      const reviews = action.payload.data

      return {
        ...state,
        ...reviews.reduce((newObj, eleObj) => {
          newObj[eleObj.id] = {
            id: eleObj.id,
            content: eleObj.attributes.content,
            rating: eleObj.attributes.rating
          }
          return newObj
        }, {})
      }

    case 'ADD_REVIEW':
      const review = action.payload.data
      
      return state.concat({
        id: review.id,
        content: review.attributes.content,
        rating: review.attributes.rating,
        propertyId: review.attributes.property_id
      })
    default:
      return state
  }
}