import axios from 'axios'
import jsonp from 'jsonp'

export function fetchProjects () {
  return function (dispatch) {
    const URL = ''
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
    const URL = ''
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
