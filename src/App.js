import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// import Header from '@/components/header'
import Home from '@/views/home'
import Wiki from '@/views/wiki'

class AnimationApp extends Component {
  render() {
    const { location } = this.props

    return (
      <TransitionGroup className="animation-group">
        <CSSTransition key={location.key} classNames="fade" timeout={{enter: 600, exit: 300}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/wiki/:title" component={Wiki}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Route component={AnimationApp}></Route>
    )
  }
}

export default App;
