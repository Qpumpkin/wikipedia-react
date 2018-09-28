import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleBookmark } from '@/actions/bookmark'

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

const mapStateToProps = state  => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps, { toggleBookmark })(BookmarkButton)