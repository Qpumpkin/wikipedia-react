export function toggleBookmark(pathname, isCollect) {
  return dispatch => {
    if (!isCollect) dispatch({ type: 'ADD_BOOKMARK', pathname })
    else dispatch({ type: 'REMOVE_BOOKMARK', pathname })
    dispatch({ type: 'UPDATE_LS_BOOKMARK' })
  }
}