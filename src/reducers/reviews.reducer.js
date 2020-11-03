export default function reviewsReducer(
  state = {},
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
            rating: eleObj.attributes.rating
          }
          return newObj
        }, {})
      }

    case 'ADD_REVIEW':
      const review = action.payload.data
      
      let newReview = {
        id: review.id,
        content: review.attributes.content,
        rating: review.attributes.rating
      }

      stateCopy = Object.assign({}, state)
      stateCopy[newReview.id] = newReview

      return stateCopy

    default:
      return state
  }
}