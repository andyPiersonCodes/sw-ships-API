const Sequelize = require('sequelize')
const shipsModel = require('./swships')

const connection = new Sequelize('DBNAME', 'USER', 'PW', {
  host: 'localhost', dialect: 'mysql'
})

const ships = shipsModel(connection, Sequelize)

module.exports = { ships }
