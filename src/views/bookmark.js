import React, { Component } from 'react'

import Header from '@/components/Header'
import BookmarkList from '@/containers/BookmarkList'

class Bookmark extends Component {
  render() {
    return (
      <div className="bookmark">
        <Header />
        <div>this is bookmark</div>
        <BookmarkList />
      </div>
    )
  }
}

export default Bookmark