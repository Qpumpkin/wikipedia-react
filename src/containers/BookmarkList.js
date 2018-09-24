import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookmarkList extends Component {
  render() {
    const { bookmarks } = this.props
    console.log(bookmarks)
    const Bookmark = bookmarks.map(item => (
      <li key={item.pathname}>{ item.pathname }</li>
    ))
    
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