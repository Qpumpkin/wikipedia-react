import React, { Component } from 'react'

import Header from '@/components/header'
import wikiImg from '@/assets/imgs/zhwiki.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="inner">
          <img src={wikiImg} className="wiki-img" alt="wiki" />
        </div>
      </div>
    )
  }
}

export default Home