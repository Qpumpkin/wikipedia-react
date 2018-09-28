import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleBookmark } from '@/actions/bookmark'
import BookmarkButton from '@/components/bookmarkButton'
import { wikiFetch } from '@/assets/utils/wikiFetch'

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

  componentWillMount() {
    wikiFetch(null, 'random')
      .then(data => {
        this.random = Object.values(data.query.pages)[0].title
      })
      .catch(err => console.log(err))
  }

  render() {
    const { bookmarks, location } = this.props
    const className = this.props.show ? "sidebar show" : "sidebar"
    const random = this.random || '2'
    return (
      <div className={className} onClick={this.handleClose}>
        <ul>
          <li className="topbar"><BookmarkButton bookmarks={bookmarks} pathname={location.pathname} /></li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-shouye"></i>
              首页
            </Link>
          </li>
          <li>
            <Link to={'/wiki/' + random}>
              <i className="iconfont icon-caidan"></i>
              随机
            </Link>
          </li>
          <li>
            <Link to='/bookmark'>
              <i className="iconfont icon-guanbi"></i>
              书签
            </Link>
          </li>
          <li>
            <Link to='/history'>
              <i className="iconfont icon-lishijilu"></i>
              历史
            </Link>
          </li>
          <li>
            <Link to='/setting'>
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

const mapStateToProps = state  => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps, { toggleBookmark })(withRouter(Sidebar))