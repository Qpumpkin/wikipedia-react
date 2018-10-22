import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleBookmark } from '@/actions/bookmark'
import { showMessage } from '@/actions/common'
import BookmarkButton from '@/components/bookmarkButton'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { loadItem, saveItem } from '@/assets/utils/localStorage'

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

  componentDidMount() {
    wikiFetch(null, 'random')
      .then(data => {
        const random = Object.values(data.query.pages).map(page => page.title)
        saveItem('random', random)
      })
      .catch(err => {
        this.props.showMessage('网络错误，试试代理吧')
      })
  }

  render() {
    const { bookmarks, location, toggleBookmark, showMessage } = this.props
    const className = this.props.show ? "sidebar show" : "sidebar"
    const random = loadItem('random') || ['1']
    const title = random[Math.floor(random.length * Math.random())]
    
    return (
      <div className={className} onClick={this.handleClose}>
        <ul>
          <li className="topbar">
            <BookmarkButton {...this.props}
              bookmarkList={bookmarks.bookmarkList} 
              toggleBookmark={toggleBookmark} 
              pathname={location.pathname}
              showMessage={showMessage}
            />
          </li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-shouye"></i>首页
            </Link>
          </li>
          <li>
            <Link to={'/wiki/' + title}>
              <i className="iconfont icon-random"></i>随机
            </Link>
          </li>
          <li>
            <Link to='/bookmark'>
              <i className="iconfont icon-label"></i>书签
            </Link>
          </li>
          <li>
            <Link to='/history'>
              <i className="iconfont icon-lishijilu"></i>历史
            </Link>
          </li>
          <li>
            <Link to='/setting'>
              <i className="iconfont icon-quanjushezhi"></i>设置
            </Link>
          </li>
        </ul>
        <div className="mask"></div>
      </div>
    )
  }
}

const mapState = state  => ({
  bookmarks: state.bookmarks
})

const mapDispatch = dispatch => ({
  toggleBookmark: (pathname, isCollect) => dispatch(toggleBookmark(pathname, isCollect)),
  showMessage: content => dispatch(showMessage(content))
})

export default connect(mapState, mapDispatch)(withRouter(Sidebar))