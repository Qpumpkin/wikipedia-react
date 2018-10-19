import { wikiFetch } from '@/assets/utils/wikiFetch'

export function getTopic(date) {
  return async dispatch => {
    let list
    try {
      list = await wikiFetch(null, 'topic')
      list = list.mostread.articles.filter(item => item.originalimage)
    } catch(e) {
      list = []
    }

    dispatch({
      type: 'UPDATE_TOPIC',
      payload: {
        date,
        topicList: list
      }
    })
  }
}