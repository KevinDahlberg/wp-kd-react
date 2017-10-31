import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

export default class Header extends Component {

  headerContent (title) {
    return (
      <Jumbotron>
        <h1>{title}</h1>
        <p>Web Developer</p>
      </Jumbotron>
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
