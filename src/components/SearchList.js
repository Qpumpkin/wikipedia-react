import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.results !== this.props.results || nextProps.show !== this.props.show) return true
    else return false
  }

  closeList = () => {
    this.props.onSearchListClose()
  }

  render() {
    if (!this.props.show) return null

    const { results } = this.props;
    const lists = Object.values(results).sort((a, b) => a.index - b.index)

    const listItem = lists.map((list, index) => {
      const src = list.thumbnail && list.thumbnail.source
      const divStyle = { 'backgroundImage': `url(${src})` }
      const Thumbnail = src ? <div style={divStyle}></div> : null
      const encodeTitle = encodeURIComponent(list.title)
      return (
        <li key={index}>
          <Link to={`/wiki/${encodeTitle}`} onClick={this.closeList}>
            <div>{list.title}</div>
            {Thumbnail}
          </Link>
        </li>
      )
    })

    return (
      <div className="search-list">
        <ul>
          {listItem}
        </ul>
        <div className="mask" onClick={this.closeList}></div>
      </div>
    )
  }
}

export default SearchList