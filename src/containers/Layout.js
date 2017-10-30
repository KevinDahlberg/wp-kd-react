import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from '../components/menu/Menu.jsx'
import Footer from '../components/footer/Footer.jsx'

import Home from './Home'

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
