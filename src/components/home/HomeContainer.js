import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPostsIfNeeded } from '../../data/posts'
import { fetchPagesIfNeeded } from '../../data/pages'

import Header from './Header.jsx'
import PostExcerpt from './PostExcerpt.jsx'
import SingleItemPanel from './SingleItemPanel.jsx'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: 'Kevin Dahlberg',
      panelOne: 'About'
    }

  }

  componentDidMount() {
    const { fetchPostsIfNeeded, fetchPagesIfNeeded } = this.props
    fetchPostsIfNeeded()
    fetchPagesIfNeeded()
    console.log(pages)
  }

  filterPageForPanel (page) {
    const { pages } = this.props
    console.log('pages is ', pages)
    const singlePage = pages.filter((_p) => {return _p.title === page})
    return singlePage[0]
  }

  render() {
    return (
      <div>
        <Header settings={this.state.settings} />
        <SingleItemPanel page={this.filterPageForPanel(this.state.panelOne)} />
        <Grid>
          <PostExcerpt posts={this.props.posts} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  pages: state.pageReducer.pages,
  isFetching: state.postReducer.isFetching,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded, fetchPagesIfNeeded}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
