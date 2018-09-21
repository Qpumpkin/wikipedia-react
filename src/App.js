import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from '@/views/home'
import Search from '@/views/search'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
      </div>
    );
  }
}

export default App;
