import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import histories from './histories'
import topics from './topics'

export default combineReducers({
  bookmarks,
  histories,
  topics
})