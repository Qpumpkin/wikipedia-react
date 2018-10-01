import { saveItem } from '@/assets/utils/localStorage'

const initialState = {
  historyList: [],
  selectList: []
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
    case 'ADD_SELECT_ITEM':
      return {
        historyList: [...historyList],
        selectList: [payload.pathname, ...selectList]
      }
    case 'REMOVE_SELECT_ITEM':
      return {
        historyList: [...historyList],
        selectList: selectList.filter(select => select !== payload.pathname)
      }
    case 'CLEAR_SELECT_ITEM':
      return {
        historyList: [...historyList],
        selectList: []
      }
    case 'UPDATE_LS_HISTORY':
      saveItem('histories', historyList)
      return state
    case 'CLEAR_HISTORY':
      return {
        selectList: [],
        historyList: []
      }
    default:
      return state
  }
}

export default histories