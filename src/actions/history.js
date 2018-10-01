export function addHistory(pathname) {
  return dispatch => {
    dispatch({ type: 'ADD_HISTORY', payload: { date: Date.now(), pathname } })
    dispatch({ type: 'UPDATE_LS_HISTORY' })
  }
}

export function addSelectItem(pathname) {
  return {
    type: 'ADD_SELECT_ITEM_H',
    payload: { pathname }
  }
}

export function removeSelectItem(pathname) {
  return {
    type: 'REMOVE_SELECT_ITEM_H',
    payload: { pathname }
  }
}

export function clearSelectItem() {
  return { type: 'CLEAR_SELECT_ITEM_H' }
}

export function removeHistory() {
  return dispatch => {
    dispatch({ type: 'REMOVE_HISTORY' })
    dispatch({ type: 'UPDATE_LS_HISTORY' })
  }
}

export function clearHistory() {
  return dispatch => {
    localStorage.removeItem('histories')
    dispatch({ type: 'CLEAR_HISTORY' })
  }
}