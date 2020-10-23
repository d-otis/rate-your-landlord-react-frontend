export default function propertiesReducer(
  state = [],
  action
) {
  console.log('action is: ', action)
  switch (action.type) {
    // case 'LOADING_LANDLORDS':
    //   return state
    // case 'SET_LANDLORDS':
    // debugger
    //   return action.payload 
    default:
      return state
  }
}