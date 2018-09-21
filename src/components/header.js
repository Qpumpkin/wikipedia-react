import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

import SearchList from './search-list'
import Sidebar from '@/components/sidebar'
import wikiIcon from '@/assets/imgs/wikipedia.svg'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { debounce } from '@/assets/utils/util'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      results: [],
      isLoading: false,
      isSearchListShow: false,
      isSidebarShow: false
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

  handleInputClick = () => {
    this.setState({ isSearchListShow: true })
  }

  handleSearchListClose = () => {
    this.setState({ isSearchListShow: false })
  }

  fetchResults = value => {
    if (value === '') {
      this.setState({ results: [] })
      return
    }
    this.setState({ isLoading: true })
      wikiFetch(value, 'search')
        .then(res => this.setState({
          results: res.query.pages || [],
          isLoading: false
        }))
        .catch(err => { throw new Error(err) })
  }

  clearInput = () => {
    this.setState({
      inputValue: '',
      results: []
    })
  }

  handleSidebarClick = () => {
    this.setState({ isSidebarShow: true })
  }

  handleSidebarClose = () => {
    this.setState({ isSidebarShow: false })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const LoadingIcon = this.state.isLoading ? <i className="iconfont icon-loading"></i> : null
    const CloseIcon = this.state.inputValue ? <i className="iconfont icon-guanbi" onClick={this.clearInput}></i> : null
    return (
      <div className="header">
        <header className="header-container">
          <div className="top-navbar">
            <i className="iconfont icon-xiangzuo" onClick={this.goBack}></i>
            <img src={wikiIcon} alt="wikipedia" width="116" height="18"></img>
            <i className="iconfont icon-caidan" onClick={this.handleSidebarClick}></i>
          </div>
          <div className="search-bar">
            <i className="iconfont icon-sousuo"></i>
            <input placeholder="search" value={this.state.inputValue} onChange={this.handleInputChange} onClick={this.handleInputClick}/>
            {LoadingIcon}
            {CloseIcon}
          </div>
        </header>
        <SearchList results={this.state.results} show={this.state.isSearchListShow} onSearchListClose={this.handleSearchListClose}/>
        <Sidebar show={this.state.isSidebarShow} onSidebarClose={this.handleSidebarClose} />
      </div>
    )
  }
}

export default withRouter(Header)