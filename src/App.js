import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '@/views/home'
import Wiki from '@/views/wiki'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/wiki/:title" component={Wiki}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
}

export default App;
