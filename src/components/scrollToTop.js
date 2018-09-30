import React, { Component } from 'react'
import { debounceMix } from '@/assets/utils/util'

class ScrollToTop extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.handleScroll = debounceMix(this.handleScroll, 200)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleClick = () => {
    let  count = 0
    const step = 12
    const Y = Math.ceil(window.scrollY / step)
    requestAnimationFrame(scrollBy)

    function scrollBy() {
      console.log(1)
      window.scrollBy(0, -Y)
      if (++count < step) {
        requestAnimationFrame(scrollBy)
      }
    }
  }

  handleScroll = () => {
    if (window.pageYOffset > 300) {
      if (this.state.show === false) {
        this.setState({ show: true })
      }
    } else {
      if (this.state.show === true) {
        this.setState({ show: false })
      }
    }
  }

  render() {
    const iconClass = this.state.show ? ' icon-show' : ''
    return (
      <div className="scroll-to-top" onClick={this.handleClick}>
        <i className={'iconfont icon-top' + iconClass}></i>
      </div>
    )
  }
}

export default ScrollToTop