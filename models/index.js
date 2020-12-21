const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const ShipsModel = require('./ships')
const WeaponsModel = require('./weapons')
const AffiliationsModel = require('./affiliations')
const environment = process.env.NODE_ENV || 'development'
// eslint-disable-next-line no-unused-vars
const config = allConfigs[environment]

const connection = new Sequelize('starWars', 'sithLord', 'GLucas514!', {
  host: 'localhost', dialect: 'mysql'
})

const Ships = ShipsModel(connection, Sequelize)
const Weapons = WeaponsModel(connection, Sequelize, Ships)
const Affiliations = AffiliationsModel(connection, Sequelize, Ships)

Weapons.belongsTo(Ships)
Ships.hasMany(Weapons)

Affiliations.belongsTo(Ships)
Ships.hasMany(Affiliations)

module.exports = { Ships, Weapons, Affiliations }
