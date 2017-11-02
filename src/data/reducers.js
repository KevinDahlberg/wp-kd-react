import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from './posts'
import pageReducer from './pages'
import settingsReducer from './settings'

const rootReducer = combineReducers({
  pageReducer,
  postReducer,
  settingsReducer,
  routing: routerReducer
})

export default rootReducer
