const models = require('../models')

const getAllAffiliations = async (req, res) => {
  const affiliations = await models.Affiliations.findAll({
    attributes: ['id', 'name'],
  })

  return res.send(affiliations)
}

module.exports = {
  getAllAffiliations,
}
