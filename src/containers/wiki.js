import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { addHistory } from '@/actions/history'
import ScrollToTop from '@/components/scrollToTop'

class Wiki extends Component {
  constructor() {
    super()
    this.state = {
      page: { sections: [] },
      isLoading: false,
      moveHeader: false
    }
  }

  componentDidMount() {
    const { location, addHistory } = this.props
    const pathname = location.pathname
    this.renderPage(pathname.slice(6))
    addHistory(pathname)
  }

  renderPage = title => {
    this.setState({ isLoading: true })
    wikiFetch(title, 'content')
      .then(res => {
        this.setState({
          page: res.mobileview,
          isLoading: false
        })
      })
      .catch(err => { console.log(err) })
  }

  handleScroll = tag => {
    if (this.state.moveHeader !== tag) {
      this.setState({ moveHeader: tag })
    }
  }

  get pageHTML() {
    const page = this.state.page
    return page.sections && page.sections.reduce((acc, cur) => {
      const header = (cur.line && cur.level) ? `<h${cur.level}>${cur.line}</h${cur.level}>` : ''
      const section = header + cur.text
      return acc + section
    }, `<h1>${page.displaytitle}</h1><p class="description">${page.description || ''}</p>`)
  }

  render() {
    const { location } = this.props
    const title = location.pathname.slice(6)
    const Article = this.state.isLoading
      ? <div className="loading"><i className="iconfont icon-loading"></i></div>
      : <article className="article" dangerouslySetInnerHTML={{ __html: this.pageHTML }} />
    const slotStyle = {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20px'
    }
    const HeaderSlot = (
      <div style={slotStyle}>
        {title}
      </div>
    )

    return (  
      <div className="wiki">
        <Header slot={HeaderSlot} moveHeader={this.state.moveHeader}/>
        <ScrollToTop parentOnScroll={this.handleScroll}/>
        { Article }
      </div>
    )
  }
}

export default connect(null, { addHistory })(Wiki)