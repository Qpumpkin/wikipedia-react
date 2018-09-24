import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import AddBookmark from '@/containers/addBookmark'

class Sidebar extends Component {
  handleClose = e => {
    const nodeName = e.target.nodeName
    if (nodeName === 'A' || nodeName === 'DIV') {
      this.props.onSidebarClose()
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.show === this.props.show) return false
    else return true
  }

  render() {
    const className = this.props.show ? "sidebar show" : "sidebar"
    return (
      <div className={className} onClick={this.handleClose}>
        <ul>
          <li><AddBookmark pathname={this.props.location.pathname} /></li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-shouye"></i>
              首页
            </Link>
          </li>
          <li>
            <Link to='/wiki/2'>
              <i className="iconfont icon-caidan"></i>
              随机
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-guanbi"></i>
              书签
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-lishijilu"></i>
              历史
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-quanjushezhi"></i>
              设置
            </Link>
          </li>
        </ul>
        <div className="mask"></div>
      </div>
    )
  }
}

export default withRouter(Sidebar)