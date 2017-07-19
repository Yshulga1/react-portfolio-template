import React from 'react'
import Grid from './Grid.jsx'
import { sendMessage } from '../actions/ContactActions'
import { Link } from 'react-router'
import { connect } from 'react-redux'

@connect(store => {
  return {
    contact: store.contact.contact,
    sent: store.contact.sent
  }
})
export default class Contact extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: '',
      emailError: '',
      messageError: '',
      submitMessage: '',
      sendError: false
    }

    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  handleName(e) {
    this.setState({name: e.target.value})
    e.target.value.trim() === '' ?
      this.setState({ nameError : 'contact-error' }) :
      this.setState({ nameError: '' })
  }
  handleEmail(e) {
    this.setState({email: e.target.value})
    e.target.value.trim() === '' ?
      this.setState({ emailError : 'contact-error' }) :
      this.setState({ emailError: '' })
  }
  handleMessage(e) {
    this.setState({message: e.target.value})
    e.target.value.trim() === '' ?
      this.setState({ messageError : 'contact-error' }) :
      this.setState({ messageError: '' })
  }
  handleSubmit(e) {
    e.preventDefault()
    if(!this.state.email ||
       !this.state.name ||
       !this.state.message ||
       this.state.emailError ||
       this.state.nameError ||
       this.state.messageError ||
       this.props.sent)
    {
      this.setState({
        sendError: true,
        submitMessage: 'Message failed to send.'
      })
    } else {
      this.props.dispatch(sendMessage(this.state.name, this.state.email, this.state.message))
      this.setState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
        submitMessage: 'Your message sent successfully.',
        sendError: false
      })
    }
  }
  handleError() {
    this.setState({ emailError: '' })
    if (!this.state.email.includes('@')) {
      this.setState({ emailError: 'contact-error' })
    }
  }

  render(){
    const { name, email, message, nameError, emailError, messageError, sendError, submitMessage } = this.state
    return(
        <Grid top='20px'>
          <div className='contact-container'>
            <form className='contact-form' onSubmit={this.handleSubmit}>
              <h2 className='contact-title'>Get in touch</h2>
              <p className='contact-blurb'>Fill out the form below if you would like to hire me for a project.
              Provide any details you believe are essential to begin with.</p>
              <p className='contact-blurb'>Head over to my <Link to={`/about`} className='contact-link'>About</Link> page if you would like to learn more about my work.</p>
              <input onChange={this.handleName} value={name} className={nameError + ' contact-name'} placeholder='Your name *' aria-label='Name required'/>
              <p className='contact-emailError' style={emailError ? {'display': 'block'} : {'display': 'none'}}>Email must contain '@'</p>
              <input onBlur={this.handleError} onChange={this.handleEmail} value={email} className={emailError + ' contact-email'} placeholder='Your email *' aria-label='Email required'/>
              <textarea onChange={this.handleMessage} value={message} className={messageError + ' contact-message'} placeholder='Message *' aria-label='Message required'/>
              <input className='contact-btn' type='submit' value='Send message'/>
              <p className={sendError ? 'contact-sendError' : 'contact-sendSuccess'}>{submitMessage}</p>
            </form>
          </div>
        </Grid>
    );
  }
}
