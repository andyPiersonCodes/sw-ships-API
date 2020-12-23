const models = require('../models')

const getIndex = (req, res) => {
  return res.render('index', { model: models.Ships.findAll })
}

const getAllShips = async (req, res) => {
  const ships = await models.Ships.findAll({
    attributes: ['id', 'name', 'manufacturer', 'shipClass', 'size', 'isUnique', 'slug'],
    include: [{ model: models.Weapons, attributes: ['name'] },
      { model: models.Affiliations, attributes: ['name'] }
    ],
  })

  return res.send(ships)
}

const getShipsById = async (req, res) => {
  try {
    const { id } = req.params

    const foundShip = await models.Ships.findOne({
      attributes: ['id', 'name', 'manufacturer', 'shipClass', 'size', 'isUnique', 'slug'],
      where: { id },
      include: [{ model: models.Weapons, attributes: ['name'] },
        { model: models.Affiliations, attributes: ['name'] }
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


module.exports = {
  getIndex,
  getAllShips,
  getShipsById,
  saveNewShip,
  deleteShip
}
