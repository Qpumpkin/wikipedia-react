import React, { Component } from 'react'

import Header from '@/components/Header'

class Setting extends Component {
  render() {
    return (
      <div className="setting">
        <Header />
        <div className="inner">
          <h2>设置</h2>
          <div className="content-box">
            <ul>
              <li>更新中...</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Setting