import React, { Component } from 'react'

class BookmarkButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collect: false
    }
  }

  componentDidMount() {
    const { bookmarks, pathname } = this.props
    bookmarks.forEach(item => {
      if (item.pathname === pathname) {
        this.setState({ collect: true })
      }
    })
  }

  handleClick = () => {
    const { pathname, toggleBookmark } = this.props
    toggleBookmark(pathname, this.state.collect)
    this.setState({ collect: !this.state.collect })
  }

  render() {
    const { pathname } = this.props
    let className = this.state.collect
      ? 'iconfont icon-staro'
      : 'iconfont icon-star1'
    
    if (pathname.slice(1, 5) === 'wiki') {
      return <i className={className} onClick={this.handleClick} />
    } else return null
  }
}

export default BookmarkButton