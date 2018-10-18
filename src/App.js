import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from '@/containers/home'
import Wiki from '@/containers/wiki'
import History from '@/containers/history'
import Bookmark from '@/containers/bookmark'
import Setting from '@/containers/setting'

class AnimationApp extends Component {
  render() {
    const { location } = this.props

    return (
      <TransitionGroup className="animation-group">
        <CSSTransition key={location.key} classNames="fade" timeout={{enter: 750, exit: 0}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wiki/:title" component={Wiki} />
            <Route path="/history" component={History} />
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/setting" component={Setting} />
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

export default App
