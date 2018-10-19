import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from '@/components/header'
import { getTopic } from '@/actions/topic'
import loadingImg from '@/assets/imgs/loading.gif'

function MapTopics(topicList) {
  const divStyle = {
    WebkitBoxOrient: 'vertical'
  }

  return (
    topicList.map(article => (
      <li className="topic" key={article.rank}>
        <Link to={`/wiki/${article.displaytitle}`}>
          <img src={article.thumbnail.source} alt="topic"/>
        </Link>
        <div className="topic-inner">
          <Link to={`/wiki/${article.displaytitle}`}>
            <div className="title">{ article.displaytitle }</div>
          </Link>
          <div className="extract" style={divStyle}>{ article.extract }</div>
        </div>
      </li>
    ))
  )
}

class Home extends Component {
  componentDidMount() {
    const { topics, getTopic } = this.props
    const date = new Date().toString().slice(0, 15)
    if (date !== topics.date) {
      getTopic(date)
    }
  }

  render() {
    const topicList = this.props.topics.topicList
    const Topics = topicList.length
      ? <div>
          { MapTopics(topicList) }
          <div className="footer">已经到底啦~</div>
        </div>
      : <li className="loading"><img src={loadingImg} alt="loading..."/></li>

    return (
      <div className="home">
        <Header />
        <div className="inner">
          <ul className="topic-list">
            { Topics }
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  topics: state.topics
})

export default connect(mapState, { getTopic })(Home)