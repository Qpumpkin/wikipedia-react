import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  handleClose = () => {
    this.props.onSidebarClose()
  }

  render() {
    if (!this.props.show) return null
    return (
      <div className="sidebar">
        <div className="mask" onClick={this.handleClose}></div>
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
              收藏
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
      </div>
    )
  }
}

export default Sidebar