import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HistoryList extends Component {
  render() {
    const { histories } = this.props
    const History = histories.length ?
      histories.map(item => (
        <li key={item.pathname}><Link to={item.pathname}>{ item.pathname.slice(6) }</Link></li>
      )) :
      <li>暂无记录</li>

    return (
      <ul>
        { History }
      </ul>
    )
  }
}

const mapStateToProps = state  => ({
  histories: state.histories
})

export default connect(mapStateToProps)(HistoryList)