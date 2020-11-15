/* eslint-disable no-console */
const express = require('express')
const ships = require('./ships')
const port = 1337
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { ships })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
