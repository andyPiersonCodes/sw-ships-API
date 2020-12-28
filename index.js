/* eslint-disable no-console */
const express = require('express')
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser')
const port = 1338
const {
  getIndex,
  getAllShips,
  getShipById,
  saveNewShip,
  deleteShip,
  getShipsBySlug,
  getShipsByGTESize,
  getShipsByLTESize
} = require('./controllers/search')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', getIndex)

app.get('/ships', getAllShips)

app.get('/ships/id/:id', getShipById)

app.get('/ships/:slug', getShipsBySlug)

app.get('/ships/gte/:size', getShipsByGTESize)

app.get('/ships/lte/:size', getShipsByLTESize)

app.post('/ships', bodyParser.json(), saveNewShip)

app.delete('/ships/:id', deleteShip)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
