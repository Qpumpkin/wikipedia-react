import React, { Component } from 'react'

import Header from '@/components/Header'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="inner">
          <h2>主页</h2>
        </div>
      </div>
    )
  }
}

export default Home