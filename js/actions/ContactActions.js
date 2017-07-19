import axios from 'axios'

export function sendMessage (name, email, message) {
  return function (dispatch) {
    axios.post(`/contact?name=${name}&email=${email}&message=${message}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    dispatch({
      type: 'SEND_MESSAGE',
      payload: { name, email, message },
      sent: true
    })
  }
}
