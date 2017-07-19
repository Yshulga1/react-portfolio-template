export default function ContactReducer (state={
  contact: {
    name: '',
    email: '',
    message: ''
  },
  sent: false
}, action) {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      return {
        ...state,
        contact: action.payload,
        sent: action.sent
      }
    }
  }
  return state
}
