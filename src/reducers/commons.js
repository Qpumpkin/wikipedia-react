const initialState = {
  message: {
    show: false,
    messageContent: ''
  }
}

const commons = (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message: {
          show: true,
          messageContent: payload.messageContent
        }
      }
    case 'CLOSE_MESSAGE':
      return {
        ...state,
        message: {
          ...state.message,
          show: false
        }
      }
    default:
      return state
  }
}

export default commons