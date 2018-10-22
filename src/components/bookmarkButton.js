import React, { Component } from 'react'

class BookmarkButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collect: false
    }
  }

  componentDidMount() {
    const { bookmarkList, pathname } = this.props
    bookmarkList.forEach(item => {
      if (item.pathname === pathname) {
        this.setState({ collect: true })
      }
    })
  }

  handleClick = () => {
    const { pathname, toggleBookmark, showMessage } = this.props
    const tag = this.state.collect
    const message = tag ? '取消收藏' : '收藏成功'
    toggleBookmark(pathname, tag)
    this.setState({ collect: !tag })
    showMessage(message)
  }

  render() {
    const { pathname } = this.props
    let className = this.state.collect
      ? 'love collected'
      : 'love'
    
    if (pathname.slice(1, 5) === 'wiki') {
      return (
        <div>
          <span className={className} onClick={this.handleClick} />
        </div>
      )
    } else return null
  }
}

export default BookmarkButton