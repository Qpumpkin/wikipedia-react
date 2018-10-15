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
    const { pathname, toggleBookmark } = this.props
    toggleBookmark(pathname, this.state.collect)
    this.setState({ collect: !this.state.collect })
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