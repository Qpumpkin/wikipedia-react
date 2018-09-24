const histories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      return [
        {
          pathname: action.pathname,
          date: action.date
        },
        ...state.filter(history => history.pathname !== action.pathname)
      ]
    case 'REMOVE_HISTORY':
      return state.filter(history => history.pathname !== action.pathname)
    default:
      return state
  }
}

export default histories