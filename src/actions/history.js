export function addHistory(pathname) {
  return dispatch => {
    dispatch({ type: 'ADD_HISTORY', date: Date.now(), pathname })
    dispatch({ type: 'UPDATE_LS_HISTORY' })
  }
}