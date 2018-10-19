const initialState = {
  date: '',
  topicList: []
}

const topics = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'UPDATE_TOPIC':
      return {
        date: payload.date,
        topicList: payload.topicList
      }
    default:
      return state  
  }
}

export default topics