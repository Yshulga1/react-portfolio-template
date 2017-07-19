import axios from 'axios'
import jsonp from 'jsonp'

export function fetchProjects () {
  return function (dispatch) {
    const URL = 'https://api.github.com/users/blmgeo/repos'
    axios.get(URL)
    .then(res => {
      dispatch({
        type: 'FETCH_PROJECTS',
        payload: res.data
      })
    })
  }
}

export function fetchDesigns () {
  return function (dispatch) {
    const URL = 'https://behance.net/v2/users/blmgeo/projects?api_key=OErwfO5RfZaRtYwQhJgK7ed8ooRZkfJm&callback=callback'
    jsonp(URL, function callback(err, data) {
      if (err) throw err
      dispatch({
        type: 'FETCH_DESIGNS',
        payload: data.projects
      })
    })
  }
}

export function fetchBlocked () {
  return function (dispatch) {
    const blocked = []
    dispatch({
      type: 'FETCH_BLOCKED',
      payload: blocked
    })
  }
}
