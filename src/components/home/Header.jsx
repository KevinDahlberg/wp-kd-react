import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

export default class Header extends Component {

  headerContent (settings) {
    return (
      <Jumbotron>
        <h1>{settings}</h1>
        <p>Web Developer</p>
      </Jumbotron>
    )
  }

  subtitleContent (categoryArray, num) {
    let type = categoryArray[num]
    return (
      <p>{type}</p>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            {this.headerContent(this.props.settings)}
          </Col>
        </Row>
      </Grid>
    )
  }
}
