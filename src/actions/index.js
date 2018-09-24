let nextHistoryId = 0

export const addBookmark = title => ({
  type: 'ADD_BOOKMARK',
  id: nextHistoryId++,
  title
})