import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import projects from './projects'

const rootReducer = combineReducers({
  projects,
})

const store =
  process.env.NODE_ENV !== 'production'
    ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    : createStore(rootReducer, applyMiddleware(thunk))

export default store
