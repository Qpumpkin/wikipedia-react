import React, { Component } from 'react'

class BookmarkButton extends Component {
  handleClick = () => {
    const { pathname, toggleBookmark } = this.props
    toggleBookmark(pathname, this.collect)
  }

  render() {
    const { bookmarks, pathname } = this.props
    let className = 'iconfont icon-staro'
    this.collect = false
    bookmarks.forEach(item => {
      if (item.pathname === pathname) {
        className = 'iconfont icon-star1'
        this.collect = true
      }
    })
    
    if (pathname.slice(1, 5) === 'wiki') {
      return <i className={className} onClick={this.handleClick} />
    } else return null
  }
}

export default BookmarkButton