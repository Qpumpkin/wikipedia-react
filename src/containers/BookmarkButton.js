import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBookmark } from '@/actions'
import { removeBookmark } from '../actions';

class BookmarkButton extends Component {
  handleClick = () => {
    const { dispatch, pathname } = this.props
    console.log(this.collect)
    if (this.collect) {
      dispatch(removeBookmark(pathname))
    } else if (pathname.slice(0, 5) === '/wiki') {
      dispatch(addBookmark(pathname))
    } else return
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
    
    return (
      <i className={className} onClick={this.handleClick} />
    )
  }
}

const mapStateToProps = state  => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(BookmarkButton)