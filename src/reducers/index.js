// rootReducer.js
import landlordsReducer from './landlords.reducer'
import propertiesReducer from './properties.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  landlords: landlordsReducer,
  properties: propertiesReducer
})

export default rootReducer