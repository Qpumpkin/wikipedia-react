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
    default:
      return state
  }
}

export default bookmarks