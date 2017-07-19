import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store'
import About from './About.jsx'
import Blog from './Blog.jsx'
import BlogSquare from './BlogSquare.jsx'
import Projects from './Projects.jsx'
import Layout from './Layout.jsx'
import Contact from './Contact.jsx'

import {Router, Route, Redirect, hashHistory} from 'react-router'

const routes = (
  <div>
    <Redirect from='/' to='/blog' />
    <Route path="/" component={Layout}>
      <Route path="about" component={About}/>
      <Route path="blog" component={Blog}>
        <Route path=':slug' component={Blog} />
      </Route>
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact}>

      </Route>
    </Route>
  </div>
)

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} onUpdate={window.scrollTo(0, 0)}/>
      </Provider>
    );
  }
}
