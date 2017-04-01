import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import user from './user/userReducer'

export default combineReducers({
  routing,
  user,
})
