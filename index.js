/* eslint-disable no-console */
const express = require('express')
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser')
const port = 1338
const {
  getIndex,
  getAllships,
  searchShips,
  showAllIds,
  notFound
} = require('./controllers/search')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', getIndex)

app.get('/ships', getAllships)

app.get('/ids', showAllIds)

app.get('/ships/:search', searchShips)

app.all('*', notFound)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
