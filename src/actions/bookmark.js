export function toggleBookmark(pathname, isCollect) {
  return dispatch => {
    if (!isCollect) dispatch({ type: 'ADD_BOOKMARK', payload: { pathname } })
    else dispatch({ type: 'REMOVE_BOOKMARK', payload: { pathname } })
    dispatch({ type: 'UPDATE_LS_BOOKMARK' })
  }
}