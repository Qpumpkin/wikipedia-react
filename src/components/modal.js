import React, { Component } from 'react'

class Modal extends Component {
  render() {
    const { isShow, handleClose, handleCommit } = this.props

    return (
      isShow
        ? <div className="modal">
            <div className="mask" onClick={handleClose}></div>
            <div className="inner">
              <div className="slot">
                {this.props.children}
              </div>
              <div className="footer">
                <div className="pull-right">
                  <button className="close" onClick={handleClose}>取消</button>
                  <button className="commit" onClick={handleCommit}>确认</button>
                </div>
              </div>
            </div>
          </div>
        : null
    )
  }
}

export default Modal