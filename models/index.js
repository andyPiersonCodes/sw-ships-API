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

/*
ENROLLMENTS IS THE LINKING TABLE
const Products = ProductsModel(connection, Sequelize)
const Employers = EmployersModel(connection, Sequelize)
const Members = MembersModel(connection, Sequelize, Employers)
const Enrollments = EnrollmentsModel(connection, Sequelize, Members, Products)

Employers.hasMany(Members)
Members.belongsTo(Employers)

*/
