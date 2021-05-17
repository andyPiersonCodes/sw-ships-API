const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const ShipsModel = require('./ships')
const WeaponsModel = require('./weapons')
const AffiliationsModel = require('./affiliations')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Ships = ShipsModel(connection, Sequelize)
const Weapons = WeaponsModel(connection, Sequelize, Ships)
const Affiliations = AffiliationsModel(connection, Sequelize, Ships)

Weapons.belongsTo(Ships)
Ships.hasMany(Weapons)

Affiliations.belongsTo(Ships)
Ships.hasMany(Affiliations)

module.exports = { Ships, Weapons, Affiliations, Op: Sequelize.Op }
