// redux thunk style
// export const addTodoAction = (value) => {
//   return (dispatch) => {
//     console.log('action')
//     dispatch({
//       type: 'ADD_INPUT1',
//       // payLoad: value,
//     })
//   }
// }

// redux saga style
export const loadUserAction = () => ({
  type: 'LOAD_USER'
})

export const setUserAction = (data) => ({
  type: 'LOAD_USER_SUCCESS',
  data,
})

export const addUserAction = (value) => ({
  type: 'ADD_INPUT',
  value
})

export const addUserSuccessAction = (newState) => ({
  type: 'ADD_INPUT_SUCCESS',
  newState
})
export const delItemAction = (index) => ({
  type: 'DEL_USER',
  index
})