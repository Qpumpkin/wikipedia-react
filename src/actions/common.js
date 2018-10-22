let timer

export function showMessage(messageContent) {
  return dispatch => {
    dispatch({ type: 'SHOW_MESSAGE', payload: { messageContent } })
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch({ type: 'CLOSE_MESSAGE' })
    }, 2000)
  }
}