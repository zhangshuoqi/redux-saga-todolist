import { takeEvery, select, put } from 'redux-saga/effects'
import { setUserAction } from '../actions'

function* delUser(action) {
  const preState = yield select( state => state.loadUsers )
  preState.splice(action.index, 1)
  yield put(setUserAction(preState))
}

function* delUserSaga() {
  yield takeEvery('DEL_USER', delUser)
}

export default delUserSaga