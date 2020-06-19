import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root'

const store =
  process.env.NODE_ENV !== 'production'
    ? createStore(rootReducer, composeWithDevTools())
    : createStore(rootReducer)

export default store
