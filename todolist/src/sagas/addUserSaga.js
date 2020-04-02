import { takeEvery, put, select } from 'redux-saga/effects'
import { setUserAction, addUserSuccessAction } from '../actions'

function* add(action) {
  const preState = yield select( state => state.loadUsers)
  preState.push({name: action.value})
  yield put(setUserAction(preState))
}

function* addUserSaga() {
  yield takeEvery('ADD_INPUT', add) // 每次都会执行
}

export default addUserSaga