const Weapons = (connection, Sequelize) => {
  return connection.define('weapons', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    weapons: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Weapons
