import React, { Component } from 'react'

import Header from '@/components/Header'
import HistoryList from '@/containers/HistoryList'

class History extends Component {
  render() {
    return (
      <div className="history">
        <Header />
        <div>this is history</div>
        <HistoryList />
      </div>
    )
  }
}

export default History