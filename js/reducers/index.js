import { combineReducers } from 'redux'
import blog from './BlogReducer'
import projects from './ProjectReducer'
import search from './SearchReducer'
import contact from './ContactReducer'

export default combineReducers({
  blog,
  projects,
  search,
  contact
})
