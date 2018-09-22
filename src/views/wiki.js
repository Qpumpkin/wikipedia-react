import React, { Component } from 'react'

import Header from '@/components/header'
import { wikiFetch } from '@/assets/utils/wikiFetch'

class Wiki extends Component {
  constructor() {
    super()
    this.state = {
      page: { sections: [] },
      isLoading: false
    }
  }

  componentWillMount() {
    this.renderPage(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.renderPage(nextProps)
  }

  renderPage = props => {
    const title = props.match.params.title
    this.setState({ isLoading: true })
    wikiFetch(title, 'content')
      .then(res => {
        console.log(res.mobileview)
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
    }, `<h1>${page.displaytitle}</h1><p class="description">${page.description}</p>`)
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

export default Wiki