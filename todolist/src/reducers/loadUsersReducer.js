

const loadUsersReducer = ( state = [], action) => {
  switch (action.type){
    case 'LOAD_USER_SUCCESS':
      return [...action.data]
    default:
      return state
  }
}

export default loadUsersReducer