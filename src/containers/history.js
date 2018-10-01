import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import SelectList from '@/components/selectList'
import * as actions from '@/actions/history'

class History extends Component {
  render() {
    const { histories, addSelectItem, removeSelectItem, removeHistory, clearSelectItem } = this.props
    const historyList = histories.historyList
    const selectList = histories.selectList
    
    const HeaderSlot = (
      <div className="header-list-slot">
        <span>已选择 {selectList.length} 项</span>
        <button onClick={clearSelectItem}>取消</button>
        <button onClick={removeHistory}>删除</button>
      </div>
    )

    return (
      <div className="history">
        <Header slot={HeaderSlot} moveHeader={selectList.length} />
        <div className="inner">
          <h2>历史记录</h2>
          <div className="content-box">
            <SelectList 
              list={historyList}
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
  histories: state.histories
})

const mapDispatch = dispatch => ({
  addSelectItem: pathname => dispatch(actions.addSelectItem(pathname)),
  removeSelectItem: pathname => dispatch(actions.removeSelectItem(pathname)),
  clearSelectItem: () => dispatch(actions.clearSelectItem()),
  removeHistory: () => dispatch(actions.removeHistory())
})

export default connect(mapState, mapDispatch)(History)