/* eslint-disable no-console */
const express = require('express')
const port = 1337
const {
  getIndex,
  getAllships,
  notFound
} = require('./controllers/search')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', getIndex)

app.get('/ships', getAllships)

app.all('*', notFound)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
