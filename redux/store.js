import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root'

const store =
  process.env.NODE_ENV !== 'production'
    ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    : createStore(rootReducer, applyMiddleware(thunk))

export default store
