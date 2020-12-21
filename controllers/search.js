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
  try {
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
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}


const notFound = (req, res) => {
  return res.sendStatus(400)
}

const saveNewShip = async (req, res) => {
  const {
    name, shipClass, size, manufacturer, isUnique, slug
  } = req.body

  if (!name || !shipClass || !size || !manufacturer || !isUnique || !slug) {
    return res.status(400).send('Error need all fields')
  }


  const newShip = await models.Ships.create({
    name, shipClass, size, manufacturer, isUnique, slug
  })

  return res.status(201).send(newShip)
}

module.exports = {
  getIndex,
  getAllShips,
  showAllIds,
  getShipsById,
  saveNewShip,
  notFound
}
