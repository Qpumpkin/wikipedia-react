import { saveItem } from '@/assets/utils/localStorage'

const initialState = {
  historyList: [],
  selectList: []
}

function transformDate(during) {
  const now = Date.now()
  let hour = 1000 * 3600

  switch (during) {
    case '1hour':
      break
    case '1day':
      hour *= 24
      break
    case '7day':
      hour *= 24 * 7
      break
    case '1month':
      hour *= 24 * 30
      break
    case 'all':
      hour = now
      break
    default:
      break
  }

  return now - hour
}

const histories = (state = initialState, action) => {
  const { historyList, selectList } = state
  const payload = action.payload
  switch (action.type) {
    case 'ADD_HISTORY':
      return {
        selectList: [...selectList],
        historyList: [
          payload, 
          ...historyList.filter(history => history.pathname !== payload.pathname)
        ]
      }
    case 'REMOVE_HISTORY':
      return {
        historyList: historyList.filter(history => selectList.indexOf(history.pathname) === -1),
        selectList: []
      }
    case 'ADD_SELECT_ITEM_H':
      return {
        historyList: [...historyList],
        selectList: [payload.pathname, ...selectList]
      }
    case 'REMOVE_SELECT_ITEM_H':
      return {
        historyList: [...historyList],
        selectList: selectList.filter(select => select !== payload.pathname)
      }
    case 'CLEAR_SELECT_ITEM_H':
      return {
        historyList: [...historyList],
        selectList: []
      }
    case 'UPDATE_LS_HISTORY':
      saveItem('histories', historyList)
      return state
    case 'CLEAR_HISTORY':
      const limit = transformDate(payload.during)
      return {
        selectList: [],
        historyList: historyList.filter(history => history.date < limit)
      }
    default:
      return state
  }
}

export default histories