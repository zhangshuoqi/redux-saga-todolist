import { takeEvery, put, take, call, fork, all } from 'redux-saga/effects'
import addUserSaga from './addUserSaga'
import loadUserSaga from './loadUserSaga'
import delUserSaga from './delUserSaga'

function* rootSaga() {
  yield all([addUserSaga(), loadUserSaga(), delUserSaga()])
}

export default rootSaga