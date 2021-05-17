/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {
  getAllShips,
  getShipById,
  saveNewShip,
  deleteShip,
  updateShip,
  getShipsBySlug,
  getShipsByGTESize,
  getShipsByLTESize,
  getShipByClass,
} from './controllers/ships'

const port = 1338

const app = express()

app.use(express.static('public'))

app.get('/api/ships', getAllShips)

app.get('/api/ships/id/:id', getShipById)

app.get('/api/ships/:slug', getShipsBySlug)

app.get('/api/ships/class/:shipClass', getShipByClass)

app.get('/api/ships/gte/:size', getShipsByGTESize)

app.get('/api/ships/lte/:size', getShipsByLTESize)

app.post('/api/ships', bodyParser.json(), saveNewShip)

app.delete('/api/ships/:id', deleteShip)
app.put('/api/ships/:id', bodyParser.json(), updateShip)

// Add Manufacturers routes

// Add isUnique routes

// Add faction routes

// Add weapons routes

app.all('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(port, () => {
  console.log('//////////ROUTES//////////')
  console.log(`http://localhost:${port}/api/ships`)
  console.log(`http://localhost:${port}/api/ships/id`)
  console.log(`http://localhost:${port}/api/ships/slug`)
  console.log(`http://localhost:${port}/api/ships/gte/`)
  console.log(`http://localhost:${port}/api/ships/lte/`)
})
