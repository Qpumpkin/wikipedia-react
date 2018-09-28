import { saveItem } from '@/assets/utils/localStorage'

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
    case 'UPDATE_LS_HISTORY':
      saveItem('histories', state)
      return state
    default:
      return state
  }
}

export default histories