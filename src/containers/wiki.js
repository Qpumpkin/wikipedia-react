import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/header'
import { wikiFetch } from '@/assets/utils/wikiFetch'
import { addHistory } from '@/actions/history'
import ScrollToTop from '@/components/scrollToTop'
import loadingImg from '@/assets/imgs/loading.gif'

function UnknowPage(title) {
  return `
    <h1>${title}</h1>
    <p><b>维基百科目前还没有与上述标题相同的条目。</b>请先在维基百科上查找“${title}”是否已有名称相近或不同文本写法的条目。</p>
    <p><b>可能出现此提示的其他原因：</b></p>
    <ul>
      <li>如果您刚刚创建了这一页面，有可能是数据库太忙而没来得及更新；请等待几分钟并尝试刷新缓存。</li>
      <li>在维基百科中，标题是<b>大小写敏感</b>（首字母除外）且不能<b>繁简混用</b>的；请检查是否有相似的标题存在。如果您没有发现混用繁简但却依然不能指向正确的标题，可以向我们提交错误报告。</li>
      <li>还有可能是这一页面已被删除。请检查删除日志和Wikipedia:删除守则上的一些理由。</li>
    </ul>
  `
}

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
    if (!page) return UnknowPage(this.props.match.params.title)
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
      ? <div className="loading"><img src={loadingImg} alt="loading..."/></div>
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