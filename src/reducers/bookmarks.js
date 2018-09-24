const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [
        ...state,
        {
          id: action.id,
          pathname: action.pathname
        }
      ]
    case 'REMOVE_BOOKMARK':
      return [
        ...state
      ]
    default:
      return state
  }
}

export default bookmarks