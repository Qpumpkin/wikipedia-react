import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class BookmarkList extends Component {
  render() {
    const { bookmarks } = this.props
    const Bookmark = bookmarks.length ? 
      bookmarks.map(item => (
        <li key={item.pathname}><Link to={item.pathname}>{ item.pathname.slice(6) }</Link></li>
      )) :
      <li>暂无内容</li>

    return (
      <ul>
        { Bookmark }
      </ul>
    )
  }
}

const mapStateToProps = state  => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(BookmarkList)