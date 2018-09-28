export const saveItem = (type, value) => {
  const serialized = JSON.stringify(value)
  localStorage.setItem(type, serialized)
}

export const loadItem = type => {
  const serialized = localStorage.getItem(type)
  if (serialized === null) return undefined
  else return JSON.parse(serialized)
}