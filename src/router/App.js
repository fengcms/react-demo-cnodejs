import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SiteIndex from '@/page/site/index'
import SiteDetails from '@/page/site/details'
import OtherFather from '@/page/other/father'
import OtherImgShow from '@/page/other/imgshow'

export default class App extends Component {
  render () {
    return (
      <Router basename="/love/">
        <Switch>
          <Route exact path='/' component={SiteIndex} />
          <Route exact path='/details/:id' component={SiteDetails} />
          <Route exact path='/father' component={OtherFather} />
          <Route exact path='/imgshow' component={OtherImgShow} />
        </Switch>
      </Router>
    )
  }
}
