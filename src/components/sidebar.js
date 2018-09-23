import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  handleClose = e => {
    const nodeName = e.target.nodeName
    if (nodeName === 'A' || nodeName === 'DIV') {
      this.props.onSidebarClose()
    }
  }

  render() {
    const className = this.props.show ? "sidebar show" : "sidebar"
    return (
      <div className={className} onClick={this.handleClose}>
        <ul>
          <li>
            <Link to='/'>
              <i className="iconfont icon-shouye"></i>
              首页
            </Link>
          </li>
          <li>
            <Link to='/'>
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

export default Sidebar