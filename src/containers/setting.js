import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import { clearHistory } from '@/actions/history'

class Setting extends Component {
  render() {
    const { clearHistory } = this.props

    return (
      <div className="setting">
        <Header />
        <div className="inner">
          <h2>设置</h2>
          <div className="content-box">
            <ul>
              <li onClick={clearHistory}><button>清除历史记录</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  clearHistory: () => dispatch(clearHistory())
})

export default connect(null, mapDispatch)(Setting)