import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './menu/Menu.jsx'
import Footer from './footer/Footer.jsx'

import Home from './home/HomeContainer.js'
import Post from './singlePost/Post.js'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
        <Menu />
        <div className="content-body">
        <Route exact path="/" component={Home} />
        <Route exact path="/:title" component={Post} />
        </div>
        <Footer />
      </div>
    </Switch>
  </div>
)

export default Layout
