const Weapons = (connection, Sequelize, Ships) => {
  return connection.define('weapons', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    shipId: { type: Sequelize.INTEGER, references: { model: Ships, key: 'id' } },
  }, { paranoid: true })
}

module.exports = Weapons
