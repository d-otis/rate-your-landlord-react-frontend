// rootReducer.js
import landlordsReducer from './landlordsReducer'
import propertiesReducer from './propertiesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  landlords: landlordsReducer,
  properties: propertiesReducer
})

export default rootReducer