import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import HistoryList from '@/components/historyList'

class History extends Component {
  render() {
    const { histories } = this.props

    return (
      <div className="history">
        <Header />
        <div className="inner">
          <h2>历史记录</h2>
          <div className="content-box">
          <HistoryList histories={histories}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state  => ({
  histories: state.histories
})

export default connect(mapStateToProps)(History)