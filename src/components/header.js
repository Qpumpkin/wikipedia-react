import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchList from './search-list'
import wikiIcon from '@/assets/imgs/wikipedia.svg'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { debounce } from '@/assets/utils/util'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      results: [],
    }
  }

  componentWillMount() {
    this.fetchDebounce = debounce(this.fetchResults, 200)
  }

  handleInputChange = event => {
    let value = event.target.value
    this.setState({ inputValue: value })
    this.fetchDebounce(value)
  }

  fetchResults = value => {
  if (value === '') return
    wikiFetch(value, 'search')
      .then(res => this.setState({ results: res.query.pages }))
      .catch(err => { throw new Error(err) })
  }

  cleanInput = () => {
    this.setState({ inputValue: '' })
  }

  render() {
    const CloseIcon = this.state.inputValue ? <i className="iconfont icon-guanbi" onClick={this.cleanInput}></i> : null
    return (
      <div className="header">
        <header className="header-container">
          <div className="top-navbar">
            <i className="iconfont icon-xiangzuo"></i>
            <img src={wikiIcon} alt="wikipedia" width="116" height="18"></img>
            <i className="iconfont icon-caidan"></i>
          </div>
          <div className="search-bar">
            <i className="iconfont icon-sousuo"></i>
            <input placeholder="search" value={this.state.inputValue} onChange={this.handleInputChange}/>
            {CloseIcon}
            <Link to="/search">123</Link>
          </div>
        </header>
        <SearchList results={this.state.results}/>
      </div>
    )
  }
}

export default Header