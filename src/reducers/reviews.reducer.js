export default function reviewsReducer(
  state = { loading: true },
  action
  ) {
  let stateCopy
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
            rating: eleObj.attributes.rating,
            propertyId: eleObj.attributes.property_id,
            address: eleObj.attributes.address
          }
          return newObj
        }, {}),
        loading: false
      }

    case 'ADD_REVIEW':
      const review = action.payload.data
      
      let newReview = {
        id: review.id,
        content: review.attributes.content,
        rating: review.attributes.rating,
        propertyId: review.attributes.property_id,
        address: review.attributes.address
      }

      stateCopy = Object.assign({}, state)
      stateCopy[newReview.id] = newReview

      return stateCopy

    default:
      return state
  }
}