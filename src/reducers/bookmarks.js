import { saveItem } from '@/assets/utils/localStorage'

const initialState = {
  bookmarkList: []
}

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarkList: [action.payload, ...state.bookmarkList]
      }
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmarkList: state.bookmarkList.filter(bookmark => bookmark.pathname !== action.payload)
      }
    case 'UPDATE_LS_BOOKMARK':
      saveItem('bookmarks', state.bookmarkList)
      return state
    default:
      return state
  }
}

export default bookmarks