const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const ShipsModel = require('./ships')
const WeaponsModel = require('./weapons')
const AffiliationsModel = require('./affiliations')
const Ships_AffiliationsModel = require('./ships_Affiliations')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Ships = ShipsModel(connection, Sequelize)
const Affiliations = AffiliationsModel(connection, Sequelize)
const Weapons = WeaponsModel(connection, Sequelize, Ships)
const Ships_Affiliations = Ships_AffiliationsModel(connection, Sequelize, Ships, Affiliations)

Weapons.belongsTo(Ships)
Ships.hasMany(Weapons)

Ships.belongsToMany(Affiliations, { through: Ships_Affiliations })
Affiliations.belongsToMany(Ships, { through: Ships_Affiliations })

module.exports = {
  Ships, Weapons, Affiliations, Ships_Affiliations, Op: Sequelize.Op,
}

/*
ENROLLMENTS IS THE LINKING TABLE
const Products = ProductsModel(connection, Sequelize)
const Employers = EmployersModel(connection, Sequelize)
const Members = MembersModel(connection, Sequelize, Employers)
const Enrollments = EnrollmentsModel(connection, Sequelize, Members, Products)

Employers.hasMany(Members)
Members.belongsTo(Employers)

Products.belongsToMany(Members, { through: Enrollments })
Members.belongsToMany(Products, { through: Enrollments })

*/
