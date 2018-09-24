import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import histories from './histories'

export default combineReducers({
  bookmarks,
  histories
})