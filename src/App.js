import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from '@/views/Home'
import Wiki from '@/views/Wiki'
import History from '@/views/History'
import Bookmark from '@/views/Bookmark'
import Setting from '@/views/Setting'

class AnimationApp extends Component {
  render() {
    const { location } = this.props

    return (
      <TransitionGroup className="animation-group">
        <CSSTransition key={location.key} classNames="fade" timeout={{enter: 500, exit: 250}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wiki/:title" component={Wiki} />
            <Route path="/history" component={History} />
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/setting" component={Setting} />
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

export default App
