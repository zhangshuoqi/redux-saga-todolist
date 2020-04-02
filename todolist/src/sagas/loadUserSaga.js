import { takeEvery, call, put } from 'redux-saga/effects'
import { getUserApi } from '../API'
import { setUserAction } from '../actions'

function* loadUser() {
  const users = yield call(getUserApi)
  yield put(setUserAction(users))
}
export default function* loadUserSaga() {
  yield takeEvery('LOAD_USER', loadUser)
}