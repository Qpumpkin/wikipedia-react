import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import Modal from '@/components/modal'
import { clearHistory } from '@/actions/history'
import { showMessage } from '@/actions/common'

class Setting extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.during = React.createRef()
  }

  handleClick = tag => {
    this.setState({ showModal: tag })
  }

  handleCommit = () => {
    this.props.clearHistory(this.during.current.value)
    this.handleClick(false)
    this.props.showMessage('清除成功')
  }

  render() {
    const { clearHistory } = this.props
    return (
      <div className="setting">
        <Header />
        <div className="inner">
          <h2>设置</h2>
          <div className="content-box">
            <ul>
              <li onClick={this.handleClick}>清除历史记录</li>
            </ul>
          </div>
        </div>
        <Modal 
          clearHistory={clearHistory} 
          isShow={this.state.showModal}
          handleClose={this.handleClick.bind(null, false)}
          handleCommit={this.handleCommit}
        >
          <div className="title">清除历史记录</div>
          <label>时间范围：</label>
          <select name="during" ref={this.during}>
            <option value="1hour">过去1小时</option>
            <option value="1day">过去24小时</option>
            <option value="7day">过去7天</option>
            <option value="1month">近4周</option>
            <option value="all">时间不限</option>
          </select>
        </Modal>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  clearHistory: during => dispatch(clearHistory(during)),
  showMessage: message => dispatch(showMessage(message))
})

export default connect(null, mapDispatch)(Setting)