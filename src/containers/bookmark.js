import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import SelectList from '@/components/selectList'
import * as actions from '@/actions/bookmark'

class Bookmark extends Component {
  render() {
    const { bookmarks, addSelectItem, removeSelectItem, removeBookmark, clearSelectItem } = this.props
    const bookmarkList = bookmarks.bookmarkList
    const selectList = bookmarks.selectList

    const HeaderSlot = (
      <div className="header-list-slot">
        <span>已选择 {selectList.length} 项</span>
        <button onClick={clearSelectItem}>取消</button>
        <button onClick={removeBookmark}>删除</button>
      </div>
    )

    return (
      <div className="bookmark">
        <Header slot={HeaderSlot} moveHeader={selectList.length} />
        <div className="inner">
          <h2>书签</h2>
          <div className="content-box">
            <SelectList 
              list={bookmarkList}
              selectList={selectList}
              addSelectItem={addSelectItem}
              removeSelectItem={removeSelectItem}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state  => ({
  bookmarks: state.bookmarks
})

const mapDispatch = dispatch => ({
  addSelectItem: pathname => dispatch(actions.addSelectItem(pathname)),
  removeSelectItem: pathname => dispatch(actions.removeSelectItem(pathname)),
  clearSelectItem: () => dispatch(actions.clearSelectItem()),
  removeBookmark: () => dispatch(actions.removeBookmark())
})

export default connect(mapState, mapDispatch)(Bookmark)