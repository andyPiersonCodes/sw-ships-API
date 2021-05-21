const models = require('../models')

const getAllAffiliations = async (req, res) => {
  const affiliations = await models.Affiliations.findAll({
    attributes: ['id', 'name'],
  })

  return res.send(affiliations)
}

const getAffiliationsByID = async (req, res) => {
  try {
    const { id } = req.params

    const foundAffiliation = await models.Affiliations.findOne({
      where: { id },
      attributes: ['id', 'name'],
    })

    return foundAffiliation
      ? res.send(foundAffiliation)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve affiliation, please try again')
  }
}

const getAffiliationWithShips = async (req, res) => {
  const affiliations = await models.Affiliations.findAll({
    attributes: ['id', 'name'],
    include: [{ model: models.Ships, attributes: ['name'], through: { attributes: [] } }],
  })

  return res.send(affiliations)
}

module.exports = {
  getAllAffiliations,
  getAffiliationsByID,
  getAffiliationWithShips,
}
