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
  getUniques,
} from './controllers/ships'
import { getAllAffiliations, getAffiliationsByID, getAffiliationWithShips } from './controllers/affiliations'

const port = 1338

const app = express()

app.use(express.static('public'))

app.get('/api/ships', getAllShips)
app.get('/api/ships/:id', getShipById)
app.get('/api/ships/slug/:slug', getShipsBySlug)
app.get('/api/ships/class/:shipClass', getShipByClass)
app.get('/api/ships/special/:unique', getUniques)
app.get('/api/ships/gte/:size', getShipsByGTESize)
app.get('/api/ships/lte/:size', getShipsByLTESize)

app.get('/api/affiliations', getAllAffiliations)
app.get('/api/affiliations/id/:id', getAffiliationsByID)
app.get('/api/affiliations/ships', getAffiliationWithShips)

app.post('/api/ships', bodyParser.json(), saveNewShip)

app.delete('/api/ships/:id', deleteShip)
app.put('/api/ships/:id', bodyParser.json(), updateShip)

app.all('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(port, () => {
  console.log('//////////ROUTES//////////')
  console.log('? means variable')
  console.log(`http://localhost:${port}/api/ships`)
  console.log(`http://localhost:${port}/api/ships/?`)
  console.log(`http://localhost:${port}/api/ships/slug/?`)
  console.log(`http://localhost:${port}/api/ships/class/:shipClass`)
  console.log(`http://localhost:${port}/api/ships/special/:unique`)
  console.log(`http://localhost:${port}/api/ships/gte/`)
  console.log(`http://localhost:${port}/api/ships/lte/`)
  console.log(`http://localhost:${port}/api/affiliations`)
  console.log(`http://localhost:${port}/api/affiliations/id/?`)
  console.log(`http://localhost:${port}/api/affiliations/ships`)
})
