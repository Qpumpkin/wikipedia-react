import React, { Component } from 'react'

import Header from '@/components/header'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div>this is home</div>
      </div>
    )
  }
}

export default Home