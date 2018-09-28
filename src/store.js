import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'
import { loadItem } from '@/assets/utils/localStorage'

const preState = {
  bookmarks: loadItem('bookmarks'),
  histories: loadItem('histories')
}

const store = createStore(
  rootReducer,
  preState,
  applyMiddleware(thunk)
)

export default store