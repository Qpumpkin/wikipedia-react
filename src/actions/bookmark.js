export function toggleBookmark(pathname, isCollect) {
  return dispatch => {
    if (!isCollect) dispatch({ type: 'ADD_BOOKMARK', payload: { pathname } })
    else dispatch({ type: 'DELETE_BOOKMARK', payload: { pathname } })
    dispatch({ type: 'UPDATE_LS_BOOKMARK' })
  }
}

export function addSelectItem(pathname) {
  return {
    type: 'ADD_SELECT_ITEM_B',
    payload: { pathname }
  }
}

export function removeSelectItem(pathname) {
  return {
    type: 'REMOVE_SELECT_ITEM_B',
    payload: { pathname }
  }
}

export function clearSelectItem() {
  return { type: 'CLEAR_SELECT_ITEM_B' }
}

export function removeBookmark() {
  return dispatch => {
    dispatch({ type: 'REMOVE_BOOKMARK' })
    dispatch({ type: 'UPDATE_LS_BOOKMARK' })
  }
}