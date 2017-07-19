export function searchPosts (val) {
  return function (dispatch) {
    dispatch({
      type: 'SEARCH_POSTS',
      payload: val
    })
  }
}
