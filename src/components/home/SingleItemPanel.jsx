import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'

export default class SingleItemPanel extends Component {

    render() {
        return (
            <Grid>
                <Row>
                    {this.props.page.title}
                </Row>
                <Row>
                    {this.props.page.content}
                </Row>
            </Grid>
        )
    }
}