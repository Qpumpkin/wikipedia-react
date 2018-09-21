import React, { Component } from 'react'

// import { json } from '@/assets/utils/mock'

class SearchList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.results === this.props.results) return false
    else return true
  }

  render() {
    const { results } = this.props;
    // const pages = json.query.pages
    const lists = Object.values(results).sort((a, b) => a.index - b.index)
    console.log(lists)
    const listItem = lists.map((list, index) => {
      const src = list.thumbnail && list.thumbnail.source
      const divStyle = { 'backgroundImage': `url(${src})` }
      const Thumbnail = src ? <div style={divStyle}></div> : null
      return (
        <li key={index}>
          <div>{list.title}</div>
          {Thumbnail}
        </li>
      )
    })
    return (
      <ul className="search-list">
        {listItem}
      </ul>
    )
  }
}

export default SearchList