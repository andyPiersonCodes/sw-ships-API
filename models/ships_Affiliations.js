const Ships_Affiliations = (connection, Sequelize, Ships, Affiliations) => connection.define('affiliations', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  shipId: { type: Sequelize.INTEGER, references: { model: Ships, key: 'id' } },
  affiliationId: { type: Sequelize.INTEGER, references: { model: Affiliations, key: 'id' } },
}, { paranoid: true })

module.exports = Ships_Affiliations
