import React, { Component } from 'react'

class SelectBox extends Component {
  handleClick = checked => {
    const { pathname, addSelectItem, removeSelectItem } = this.props
    if (checked) {
      removeSelectItem(pathname)
    } else {
      addSelectItem(pathname)
    }
  }

  render() {
    const { pathname, selectList } = this.props
    const checked = selectList.indexOf(pathname) !== -1
    const checkedClass = checked ? ' checked' : ''

    return (
      <span 
        className={'select-box' + checkedClass}
        onClick={this.handleClick.bind(this, checked)
      }>
        <i className="iconfont icon-gou1"></i>
      </span>
    )
  }
}

export default SelectBox