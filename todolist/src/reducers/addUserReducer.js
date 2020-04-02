const addUserReducer = ( state = [], action) => {
  console.log('add user reduer 22222222', action)
  switch(action.type) {
    case 'ADD_INPUT_SUCCESS':
      return [...action.newState]
    default:
      return state
  }
}

export default addUserReducer