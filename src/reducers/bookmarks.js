import { saveItem } from '@/assets/utils/localStorage'

const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [
        {
          pathname: action.pathname
        },
        ...state
      ]
    case 'REMOVE_BOOKMARK':
      return state.filter(bookmark => bookmark.pathname !== action.pathname)
    case 'UPDATE_LS_BOOKMARK':
      saveItem('bookmarks', state)
      return state
    default:
      return state
  }
}

export default bookmarks