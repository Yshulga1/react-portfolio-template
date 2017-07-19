import axios from 'axios'

export function fetchPosts (slug) {
  return function (dispatch) {
    axios.get('https://blmgeo-railscms.herokuapp.com/posts/json?user_id=1')
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
