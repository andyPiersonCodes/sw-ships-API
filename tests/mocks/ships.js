const shipsList = [{
  id: 1,
  name: 'A Wing',
  shipClass: 'interceptor',
  size: 7,
  manufacturer: 'Kuat Drive Yards',
  isUnique: 'NO',
  slug: 'a-wing'
}, {
  id: 2,
  name: 'AA-9 Coruscant  Freighter',
  shipClass: 'Freighter',
  size: 390,
  manufacturer: 'Botajef Shipyards',
  isUnique: 'NO',
  slug: 'aa-9-coruscant-freighter'
}]

const singleShip = {
  id: 2,
  name: 'AA-9 Coruscant  Freighter',
  shipClass: 'Freighter',
  size: 390,
  manufacturer: 'Botajef Shipyards',
  isUnique: 'NO',
  slug: 'aa-9-coruscant-freighter'
}

const newShip = {
  name: 'Q Wing',
  shipClass: 'corvette',
  size: 70,
  manufacturer: 'Cygnus Spaceworks',
  isUnique: 'NO',
  slug: 'q-wing'
}

module.exports = { shipsList, singleShip, newShip }
