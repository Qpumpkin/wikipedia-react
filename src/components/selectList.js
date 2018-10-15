import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SelectBox from '@/components/selectBox'

class SelectList extends Component {
  render() {
    const { list } = this.props
    const ListItem = list.length
      ? list.map(item => (
          <li key={item.pathname} className="select-list-item">
            <SelectBox 
              {...this.props}
              pathname={item.pathname}
            />
            <Link to={item.pathname}>
              { item.pathname.slice(6) }
            </Link>
          </li>
        ))
      : <li>暂无记录</li>

    return (
      <ul className="select-list">
        { ListItem }
      </ul>
    )
  }
}

export default SelectList