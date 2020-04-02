import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import createSagaMilldere from 'redux-saga'
import rootSaga from '../sagas'

const sagaMilldeware = createSagaMilldere()

const store = createStore(
  rootReducer,
  // applyMiddleware(thunk),
  compose(
    applyMiddleware(sagaMilldeware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
sagaMilldeware.run(rootSaga)
export default store