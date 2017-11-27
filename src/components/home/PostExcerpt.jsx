import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorArray: ['#fad5a6', '#fbb79e', '#e25f70']
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  excerptTitle (title) {
    return (
      <Row>
        <h1>{title}</h1>
      </Row>
    )
  }

  excerptSummary (summary) {
    return (
      <Row>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        </Row>
    )
  }

  excerptBox (colorArray, postInfo) {
    console.log(postInfo)
    const postPath = postInfo.title.toLowerCase().toString().replace(/\s/g,'-')
    const colorIndex = this.getRandomInt(0, (colorArray.length - 1))
    const color = colorArray.slice(colorIndex, colorIndex+1)
    console.log(color);
    
    let boxStyle = {
      backgroundColor: color[0],
      padding: '30px',
      height: '350px',
      marginBottom: '20px'
    }

    return (
    <Link to={postPath}>
      <div key={postInfo.id}>
        <Col xs={12} md={3}>
          <Col xs={12} style={boxStyle}>
            {this.excerptTitle(postInfo.title)}
            {this.excerptSummary(postInfo.excerpt)}
          </Col>
        </Col>
      </div>
    </Link>
    )
  }

  render() {
    return (
      <div className="excerpt-box">
        {this.props.posts.map((post, idx) => {
            return (
              <div key={idx}>
              {this.excerptBox(this.state.colorArray, post)}
              </div>
            )
          })
        }
      </div>
    )
  }
}
