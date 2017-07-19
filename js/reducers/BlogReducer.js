export default function BlogReducer (state={
  posts: [],
  reading: 'ALL'
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return {
        ...state,
        posts: action.payload,
        reading: action.reading
      }
    }
    case 'FILTER_POSTS': {
      return {
        ...state,
        posts: state.posts,
        reading: action.reading
      }
    }
  }
  return state
}
