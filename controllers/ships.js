/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser')
const models = require('../models')
const shipInfo = require('../shipInfo')
const manuInfo = require('../manu')
const classInfo = require('../shipClasses')

const getIndex = (req, res) => {
  return res.render('index', { shipInfo, manuInfo, classInfo })
}

const getAllShips = async (req, res) => {
  const ships = await models.Ships.findAll({
    attributes: ['id', 'name', 'shipClass', 'size', 'manufacturer', 'isUnique', 'slug'],
    include: [{ model: models.Weapons, attributes: ['name'] },
      { model: models.Affiliations, attributes: ['name'] },
    ],
  })

  return res.send(ships)
}

const getShipById = async (req, res) => {
  try {
    const { id } = req.params

    const foundShip = await models.Ships.findOne({
      where: { id },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] },
      ],
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const getShipsBySlug = async (req, res) => {
  try {
    const { slug } = req.params

    const foundShip = await models.Ships.findAll({
      where: {
        slug: { [models.Op.like]: `%${slug}%` },
      },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] },
      ],
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const getShipByClass = async (req, res) => {
  try {
    const { shipClass } = req.params

    const foundShip = await models.Ships.findAll({
      where: { shipClass },
      include: { model: models.Weapons, attributes: ['name'] },
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const getUniques = async (req, res) => {
  try {
    const { unique } = req.params

    const foundShip = await models.Ships.findOne({
      where: { unique },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] },
      ],
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const getShipsByGTESize = async (req, res) => {
  try {
    const { size } = req.params

    const foundShip = await models.Ships.findAll({
      where: {
        size: { [models.Op.gte]: size },
      },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] },
      ],
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const getShipsByLTESize = async (req, res) => {
  try {
    const { size } = req.params

    const foundShip = await models.Ships.findAll({
      where: {
        size: { [models.Op.lte]: size },
      },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] },
      ],
    })

    return foundShip
      ? res.send(foundShip)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve ship, please try again')
  }
}

const saveNewShip = async (req, res) => {
  const {
    name, shipClass, size, manufacturer, isUnique, slug,
  } = req.body

  if (!name || !shipClass || !size || !manufacturer || !isUnique || !slug) {
    return res.status(400).send('Error need all fields')
  }

  const newShip = await models.Ships.create({
    name, shipClass, size, manufacturer, isUnique, slug,
  })

  return res.status(201).send(newShip)
}

const deleteShip = async (req, res) => {
  try {
    const { id } = req.params

    const ship = await models.Ships.findOne({ where: { id } })

    if (!ship) return res.status(404).send(`No matching ship with id: ${id}`)
    await models.Ships.destroy({ where: { id } })

    return res.send(`Successfully deleted the ship: ${id}.`)
  } catch (error) {
    return res.status(500).send('Unknown error while deleting ship, please try again')
  }
}

const updateShip = async (req, res) => {
  try {
    const { id } = req.params
    const {
      name, shipClass, size, manufacturer, isUnique, slug,
    } = req.body

    const ship = await models.Ships.findOne({ where: { id } })

    if (!ship) return res.status(404).send(`Can't update ship with id: ${id}`)
    await models.Ships.update({
      name, shipClass, size, manufacturer, isUnique, slug,
    }, {
      where: { id },
    })

    return res.send(`Successfully updated the ship: ${id}.`)
  } catch (error) {
    return res.status(500).send('Unknown error while updating ship, please try again')
  }
}

module.exports = {
  getIndex,
  getAllShips,
  getShipById,
  getShipsBySlug,
  getShipByClass,
  getShipsByGTESize,
  getShipsByLTESize,
  getUniques,
  saveNewShip,
  deleteShip,
  updateShip,
}
