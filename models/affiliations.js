const Affiliations = (connection, Sequelize) => connection.define('affiliations', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
}, { paranoid: true })

module.exports = Affiliations
