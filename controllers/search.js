/* eslint-disable no-console */
const ships = require('../ships')
const models = require('../models')

const getIndex = (req, res) => {
  return res.render('index', { ships })
}

const getAllShips = async (req, res) => {
  const ships = await models.Ships.findAll({
    include: [{ model: models.Weapons, attributes: ['name'] },
      { model: models.Affiliations, attributes: ['name'] }
    ],
  })

  return res.send(ships)
}

const showAllIds = (req, res) => {
  return res.render('ids')
}

// test for seach, doesnt work currently, find is not a function
// need to decide if a long seach with a bunch of || is better or break it up into
// localhost:port/manufacturer localhost:port/type etc etc is better
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
  getAllShips,
  searchShips,
  showAllIds,
  notFound
}
