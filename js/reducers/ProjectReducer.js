export default function ProjectReducer (state={
  projects: [],
  designs: [],
  blocked: []
}, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS': {
      return {
        ...state,
        projects: action.payload
      }
    }

    case 'FETCH_DESIGNS': {
      return {
        ...state,
        designs: action.payload
      }
    }

    case 'FETCH_BLOCKED': {
      return {
        ...state,
        blocked: action.payload
      }
    }
  }
  return state
}
