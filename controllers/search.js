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

const getShipsById = async (req, res) => {
  const { id } = req.params

  const foundShip = await models.Ships.findOne({
    where: { id },
    include: [{ model: models.Weapons, attributes: ['name'] },
      { model: models.Affiliations, attributes: ['name'] }
    ],
  })

  return foundShip
    ? res.send(foundShip)
    : res.status(404).send('404, This is the not  the ship you are looking for')
}


const notFound = (req, res) => {
  return res.sendStatus(400)
}

module.exports = {
  getIndex,
  getAllShips,
  showAllIds,
  getShipsById,
  notFound
}
