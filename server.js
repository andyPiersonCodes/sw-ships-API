/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {
  getAllShips,
  getShipById,
  saveNewShip,
  deleteShip,
  getShipsBySlug,
  getShipsByGTESize,
  getShipsByLTESize,
} from './controllers/search'

const port = 1338

const app = express()

app.use(express.static('public'))

app.get('/api/ships', getAllShips)

app.get('/api/ships/id/:id', getShipById)

app.get('/api/ships/:slug', getShipsBySlug)

app.get('/api/ships/gte/:size', getShipsByGTESize)

app.get('/api/ships/lte/:size', getShipsByLTESize)

app.post('/ships', bodyParser.json(), saveNewShip)

app.delete('api//ships/:id', deleteShip)

app.all('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
