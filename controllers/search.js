/* eslint-disable no-console */
const ships = require('../ships')

const getIndex = (req, res) => {
  return res.render('index', { ships })
}

const getAllships = (req, res) => {
  return res.render('ships', { ships })
}

// test for seach, doesnt work currently, find is not a function
const searchShips = (req, res) => {
  const { search } = req.params

  const ship = ships.filter((ship) => {
    return ship.name.toLowerCase().includes(search.toLowerCase()) ||
     ship.type.find((type) => type.toLowerCase().includes(search.toLowerCase()))
  })

  return res.send(ship)
}

const notFound = (req, res) => {
  return res.sendStatus(400)
}

module.exports = {
  getIndex,
  getAllships,
  searchShips,
  notFound
}
