import fetch from 'isomorphic-fetch'
import { fetchPosts } from './posts'

const REQUEST_PAGES = 'REQUEST_PAGEST'
const RECEIVE_PAGES = 'RECEIVE_PAGES'
const REQUEST_SINGLE_PAGE = 'REQUEST_SINGLE_PAGE'
const RECEIVE_SINGLE_PAGE = 'RECEIVE_SINGLE_PAGE'


const initialState = {
  pages: [],
  currentPage: []
}

/** ACTIONS **/
//the request functions are here for future addition of "isFetching"
function requestPages() {
  return {type: REQUEST_PAGES}
}

function receivePages(pageArray) {
  return {type: RECEIVE_PAGES, pages: pageArray}
}

function requestSinglePage(){
  return {type: REQUEST_SINGLE_PAGE}
}

function receiveSinglePage(json){
  return {type: RECEIVE_SINGLE_PAGE, currentPage: json}
}

/** Pages Functions */
export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      return dispatch(fetchPages())
    }
  }
}

function shouldFetchPages(state) {
  const pages = state.pageReducer.pages
  if (pages.length === 0) {
    return true
  } else {
    return false
  }
}

function fetchPages() {
  const init = {
    method: 'GET'
  }
  return dispatch => {
    dispatch(requestPages())
    fetch('http://kevindahlberg.com/wp-json/wp/v2/pages', init)
    .then(response => response.json())
    .then(json => dispatch(receivePages(sanitizePages(json))))
  }
}

function sanitizePages(pageArray) {
  console.log(pageArray)
  const newArray = pageArray.map((page) => {
    let singlePage = {}
    singlePage = {
      title: page.title.rendered,
      slug: page.slug,
      content: page.content.rendered,
      featuredImage: page.featured_media,
      excerpt: page.excerpt.rendered
    }
    console.log(singlePage)
    return singlePage
  })
  return newArray;
}

/** Single Page Functions */
function shouldFetchSinglePages(state, pageName) {
  //this variable will get changed when multiple pages are taken into consideration
  const page = state.pageReducer.currentPage
  if (page.length !== 0 && page[0].slug === pageName) {
    return false
  } else {
    return true
  }
}

export function shouldFetchSinglePage(pageName) {
  return (dispatch, getState) => {
    dispatch(requestSinglePage())

    if (shouldFetchPages(getState(), pageName)) {
      dispatch(fetchSinglePage(pageName))
      //if the page hasn't been loaded, then the posts aren't loaded either - this improves user experience
      dispatch(fetchPosts())
    } else {
      return
    }
  }
}

function fetchSinglePage(pageName) {
  const init = {
    method: 'GET'
  }
  const url = 'http://kevindahlberg.com/wp-json/wp/v2/pages?slug=' + pageName
  return dispatch => {
    fetch(url, init)
    .then(response => response.json())
    .then(json => dispatch(receiveSinglePage(json)))
  }
}

/** REDUCER **/

function pageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PAGES:
      return state
    case RECEIVE_PAGES:
      return {
        ...state,
        pages: action.pageArray
      }
    case REQUEST_SINGLE_PAGE:
      return state
    case RECEIVE_SINGLE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return state
  }
}

export default pageReducer
