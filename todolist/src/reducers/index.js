import { combineReducers } from 'redux'
import loadUsersReducer from './loadUsersReducer'
import addUserReducer from "./addUserReducer";

const rootReducer = combineReducers({
  loadUsers: loadUsersReducer,
  addUser: addUserReducer,
})

export default rootReducer