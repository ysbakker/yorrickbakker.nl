import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import projects from './projects'
import messages from './messages'
import user from './user'

const rootReducer = combineReducers({
  projects,
  messages,
  user,
})

const store =
  process.env.NODE_ENV !== 'production'
    ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    : createStore(rootReducer, applyMiddleware(thunk))

export default store
