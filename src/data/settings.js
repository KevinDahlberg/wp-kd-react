import fetch from 'isomorphic-fetch'

const REQUEST_CATEGORIES = 'REQUEST_REQUESTCATEGORIES'
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

const initialState = {
  categories: []
}

/** Actions **/
function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categoryArray) {
  console.log(categoryArray);
  return {
    type: RECEIVE_CATEGORIES,
    pageSettings: {
      categories: categoryArray
    }
  }
}

/** Category Functions */
function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories)
    }
  }
}

function shouldFetchCategories(state) {
  const categories = state.settingsReducer.pageSettings.categories
  if (categories.length === 0) {
    return true
  } else {
    return false
  }
}

function fetchCategories() {
  const init = {
    method: 'GET'
  }
  return dispatch => {
    dispatch(requestCategories())
    fetch('http://kevindahlberg.com/wp-json/wp/v2/categories', init)
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json)))
  }
}

//Maybe add a sanitize function here to make object look pretty.

//Other Routes for site settings can be added here, such as Page Title, Page Image, and other things.

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return state
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

export default settingsReducer
