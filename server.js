import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import Routes from './js/components/Routes.jsx'
import NotFoundPage from './js/components/NotFoundPage.jsx'
import LoadingPage from './js/components/LoadingPage.jsx'
import sendMail from './contact'
import http from 'http'

const app = new express()

app.use(express.static(__dirname))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname))
app.get('*', (req, res) => {
  match({ Routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err)
        return res.status(500).send(err.message)
      if (redirectLocation)
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search)

      let markup

      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps} />)
      } else {
        markup = renderToString(<LoadingPage />)
      }
      return res.render('index', { markup })
    })
})

app.post('/contact', sendMail)

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';
app.listen(port)
console.log(`Server running on http://localhost:${port} [${env}]`)

//Keep Heroku connection alive
function pingRailsCMS() {
    http.get("http://blmgeo-railscms.herokuapp.com/")
    console.log('Pinged RailsCMS')
}

setInterval(pingRailsCMS, 30000)
