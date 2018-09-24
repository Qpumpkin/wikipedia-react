import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/Header'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { addHistory } from '@/actions'

class Wiki extends Component {
  constructor() {
    super()
    this.state = {
      page: { sections: [] },
      isLoading: false
    }
  }

  componentWillMount() {
    const { location, dispatch } = this.props
    const pathname = location.pathname
    this.renderPage(pathname.slice(6))
    dispatch(addHistory(pathname))
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
      .catch(err => { throw new Error(err) })
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
    const Article = this.state.isLoading ? 
      <div className="loading"><i className="iconfont icon-loading"></i></div> :
      <article className="article" dangerouslySetInnerHTML={{ __html: this.pageHTML }} />
    return (
      <div className="wiki">
        <Header />
        { Article }
      </div>
    )
  }
}

export default connect()(Wiki)