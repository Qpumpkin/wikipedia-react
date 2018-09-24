import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBookmark } from '@/actions'

class AddBookmark extends Component {
  handleClick = () => {
    const { dispatch, pathname } = this.props
    if (pathname.slice(0, 5) === '/wiki') {
      dispatch(addBookmark({ pathname }))
    } else return
  }

  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    )
  }
}

export default connect()(AddBookmark)