import React, { Component } from 'react'

class Message extends Component {
  render() {
    const { show, messageContent } = this.props.message
    const showClass = show ? ' enter' : ' leave'
    return (
      <div className={'message' + showClass}>{messageContent}</div>
    )
  }
}

export default Message