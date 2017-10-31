import fetch from 'isomorphic-fetch'

const REQUEST_SETTINGS = 'REQUEST_SETTINGS'
const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS'

const initialState = {
  pageSettings: {}
}

/** Actions **/
function requestSettings() {
  return {
    type: REQUEST_SETTINGS
  }
}

function receiveSettings(settingsObj) {
  console.log(settingsObj);
  return {
    type: RECEIVE_SETTINGS,
    pageSettings: settingsObj
  }
}

function shouldFetchSettings(state) {
  const settings = state.settingsReducer.pageSettings
  if (settings) {
    return true
  } else {
    return false
  }
}

function fetchSettings () {
  const init = {
    method: 'GET'
  }
  return dispatch => {
    fetch('http://kevindahlberg.com/wp-json/wp/v2/settings/title', init)
    .then(response => response.json())
    .then(json => dispatch(receiveSettings(json)))
  }
}
export function fetchSettingsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchSettings(getState())) {
      return dispatch(fetchSettings())
    }
  }
}
