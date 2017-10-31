import React, { Component } from 'react'

import Header from '../components/home/Header.jsx'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: 'Kevin Dahlberg'
    }
  }

  render() {
    return (
      <div>
        <Header settings={this.state.settings} />
      </div>
    )
  }
}
