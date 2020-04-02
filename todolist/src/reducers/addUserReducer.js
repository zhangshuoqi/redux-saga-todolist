const addUserReducer = ( state = [], action) => {
  switch(action.type) {
    case 'ADD_INPUT_SUCCESS':
      return [...action.newState]
    default:
      return state
  }
}

export default addUserReducer