import { saveItem } from '@/assets/utils/localStorage'

const initialState = {
  bookmarkList: [],
  selectList: []
}

const bookmarks = (state = initialState, action) => {
  const { bookmarkList, selectList } = state
  const payload = action.payload
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        selectList: [...selectList],
        bookmarkList: [payload, ...state.bookmarkList]
      }
    case 'DELETE_BOOKMARK':
      return {
        selectList: [...selectList],
        bookmarkList: state.bookmarkList.filter(bookmark => bookmark.pathname !== action.payload)
      }
    case 'REMOVE_BOOKMARK':
      return {
        bookmarkList: bookmarkList.filter(bookmark => selectList.indexOf(bookmark.pathname) === -1),
        selectList: []
      }
    case 'ADD_SELECT_ITEM_B':
      return {
        bookmarkList: [...bookmarkList],
        selectList: [payload.pathname, ...selectList]
      }
    case 'REMOVE_SELECT_ITEM_B':
      return {
        bookmarkList: [...bookmarkList],
        selectList: selectList.filter(select => select !== payload.pathname)
      }
    case 'CLEAR_SELECT_ITEM_B':
      return {
        bookmarkList: [...bookmarkList],
        selectList: []
      }
    case 'UPDATE_LS_BOOKMARK':
      saveItem('bookmarks', state.bookmarkList)
      return state
    default:
      return state
  }
}

export default bookmarks