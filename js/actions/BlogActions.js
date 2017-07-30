import axios from 'axios'

export function fetchPosts (slug) {
  return function (dispatch) {
    axios.get('')
    .then(res => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: res.data,
        reading: slug || 'ALL'
      })
    })
  }
}

export function filterPosts (slug) {
  return function (dispatch) {
    dispatch({
      type: 'FILTER_POSTS',
      reading: slug
    })
  }
}
