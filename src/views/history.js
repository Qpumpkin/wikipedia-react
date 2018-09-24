import React, { Component } from 'react'

import Header from '@/components/Header'
import HistoryList from '@/containers/HistoryList'

class History extends Component {
  render() {
    return (
      <div className="history">
        <Header />
        <div className="inner">
          <h2>历史记录</h2>
          <div className="content-box">
          <HistoryList />
          </div>
        </div>
      </div>
    )
  }
}

export default History