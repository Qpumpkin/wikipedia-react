import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import BookmarkList from '@/components/bookmarkList'

class Bookmark extends Component {
  render() {
    const { bookmarks } = this.props

    return (
      <div className="bookmark">
        <Header />
        <div className="inner">
          <h2>书签</h2>
          <div className="content-box">
            <BookmarkList bookmarks={bookmarks}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state  => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(Bookmark)