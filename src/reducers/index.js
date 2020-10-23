// rootReducer.js
import landlordsReducer from './landlords.reducer'
import propertiesReducer from './properties.reducer'
import reviewsReducer from './reviews.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  landlords: landlordsReducer,
  properties: propertiesReducer,
  reviews: reviewsReducer
})

export default rootReducer