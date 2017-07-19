export default function SearchReducer (state={
  search: ''
}, action) {
  switch (action.type) {
    case 'SEARCH_POSTS': {
      return {
        ...state,
        search: action.payload
      }
    }
  }
  return state
}
