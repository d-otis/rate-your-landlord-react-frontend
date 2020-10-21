// rootReducer.js
import landlordsReducer from './landlordsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  landlords: landlordsReducer
})

export default rootReducer