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

const smallShip = {
  id: 1,
  name: 'A Wing',
  shipClass: 'interceptor',
  size: 7,
  manufacturer: 'Kuat Drive Yards',
  isUnique: 'NO',
  slug: 'a-wing'
}

const newShip = {
  name: 'Q Wing',
  shipClass: 'corvette',
  size: 70,
  manufacturer: 'Cygnus Spaceworks',
  isUnique: 'NO',
  slug: 'q-wing'
}

const deleteThisShip = {
  id: 150,
  name: 'Q Wing',
  shipClass: 'corvette',
  size: 70,
  manufacturer: 'Cygnus Spaceworks',
  isUnique: 'NO',
  slug: 'q-wing'
}

module.exports = {
  shipsList, singleShip, newShip, smallShip, deleteThisShip
}
