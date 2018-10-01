import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from '@/components/header'
import SelectBox from '@/components/selectBox'

class Bookmark extends Component {
  render() {
    const { bookmarks } = this.props
    const bookmarkList = bookmarks.bookmarkList
    const Bookmark = bookmarkList.length
      ? bookmarkList.map(item => (
          <li key={item.pathname} className="select-list">
            <SelectBox checked={item.checked} />
            <Link to={item.pathname}>
              { item.pathname.slice(6) }
            </Link>
          </li>
        ))
      : <li>暂无内容</li>
    const HeaderSlot = (
      <div className="header-slot-list">
        <span>已选择 0 项</span>
        <button>取消</button>
        <button>删除</button>
      </div>
    )

    return (
      <div className="bookmark">
        <Header slot={HeaderSlot} moveHeader={false} />
        <div className="inner">
          <h2>书签</h2>
          <div className="content-box">
            <ul>
              { Bookmark }
            </ul>
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