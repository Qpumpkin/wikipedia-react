export const addBookmark = pathname => ({
  type: 'ADD_BOOKMARK',
  pathname
})

export const removeBookmark = pathname => ({
  type: 'REMOVE_BOOKMARK',
  pathname
})