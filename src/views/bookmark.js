import React, { Component } from 'react'

import Header from '@/components/Header'
import BookmarkList from '@/containers/BookmarkList'

class Bookmark extends Component {
  render() {
    return (
      <div className="bookmark">
        <Header />
        <div className="inner">
          <h2>书签</h2>
          <div className="content-box">
            <BookmarkList />
          </div>
        </div>
      </div>
    )
  }
}

export default Bookmark