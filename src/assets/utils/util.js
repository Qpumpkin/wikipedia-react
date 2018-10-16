export function debounce(func, wait = 100) {
  let timer = 0
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

export function throttle(func, wait = 100) {
  let last = 0
  return (...args) => {
    let cur = +new Date()
    if (cur - last > wait) {
      func.apply(this, args)
      last = cur
    }
  }
}

export function debounceMix(func, wait = 100) {
  let timer = 0
  let last = 0
  return (...args) => {
    clearTimeout(timer)
    let cur = +new Date()
    if (cur - last > wait) {
      func.apply(this, args)
      last = cur
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      last = +new Date()
    }, wait)
  }
}

export function getDuring(lastTime) {
  if (!lastTime) return ''
  let time = Date.now()
  lastTime = new Date(lastTime).getTime()
  let during = time - lastTime
  during /= 1000
  if (during < 60) return (during | 0) + '秒前'
  during /= 60
  if (during < 60) return (during | 0) + '分钟前'
  during /= 60
  if (during < 24) return (during | 0) + '小时前'
  during /= 24
  return (during | 0) + '天前'
}