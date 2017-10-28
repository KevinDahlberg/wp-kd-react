import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './menu/Menu'
import Footer from './footer/Footer'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
        <Menu />
        <div className="content-body">
        <Route exact path="/" component={Home} />
        </div>
        <Footer />
      </div>
    </Switch>
  </div>
)

export default Layout
