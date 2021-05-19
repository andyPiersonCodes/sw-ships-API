const Sequelize = require('sequelize')
const models = require('../models')

const getAllAffiliations = async (req, res) => {
  const affiliations = await models.Affiliations.findAll({
    attributes: [[Sequelize.literal('DISTINCT `name`'), 'name'], 'id'],
  })

  return res.send(affiliations)
}

module.exports = {
  getAllAffiliations,
}
