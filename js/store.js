import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers/index'

export default compose(applyMiddleware(thunk, logger(), promise())(createStore)(reducer))
