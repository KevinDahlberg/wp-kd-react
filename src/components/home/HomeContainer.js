import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPostsIfNeeded } from '../../data/posts'

import Header from './Header.jsx'
import PostExcerpt from './PostExcerpt.jsx'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: 'Kevin Dahlberg'
    }

  }

  componentDidMount() {
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded()
  }

  render() {
    return (
      <div>
        <Header settings={this.state.settings} />
        <Grid>
          <PostExcerpt posts={this.props.posts} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isFetching: state.postReducer.isFetching,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
