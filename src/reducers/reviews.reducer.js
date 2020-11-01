export default function reviewsReducer(
  state =[],
  action
  ) {
  switch (action.type) {
    case 'LOADING_REVIEWS':
      return state
    case 'SET_REVIEWS':
      const reviews = action.payload.data

      return reviews.map(review => {
        return ({
          id: review.id,
          content: review.attributes.content,
          rating: review.attributes.rating
        })
      })
    case 'ADD_REVIEW':
      debugger
      return state
    default:
      return state
  }
}