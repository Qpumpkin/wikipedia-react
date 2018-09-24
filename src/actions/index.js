export const addBookmark = pathname => ({
  type: 'ADD_BOOKMARK',
  pathname
})

export const removeBookmark = pathname => ({
  type: 'REMOVE_BOOKMARK',
  pathname
})

export const addHistory = pathname => ({
  type: 'ADD_HISTORY',
  date: Date.now(),
  pathname
})