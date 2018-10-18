import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleBookmark } from '@/actions/bookmark'
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
      .catch(err => console.log(err))
  }

  render() {
    const { bookmarks, location, toggleBookmark } = this.props
    const bookmarkList = bookmarks.bookmarkList
    const className = this.props.show ? "sidebar show" : "sidebar"
    const random = loadItem('random') || ['1']
    const title = random[Math.floor(random.length * Math.random())]
    
    return (
      <div className={className} onClick={this.handleClose}>
        <ul>
          <li className="topbar">
            <BookmarkButton 
              bookmarkList={bookmarkList} 
              toggleBookmark={toggleBookmark} 
              pathname={location.pathname}
            />
          </li>
          <li>
            <Link to='/'>
              <i className="iconfont icon-shouye"></i>首页
            </Link>
          </li>
          <li>
            <Link to={'/wiki/' + title}>
              <i className="iconfont icon-caidan"></i>随机
            </Link>
          </li>
          <li>
            <Link to='/bookmark'>
              <i className="iconfont icon-guanbi"></i>书签
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

export default connect(mapState, { toggleBookmark })(withRouter(Sidebar))