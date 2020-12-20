const Ships = (connection, Sequelize) => {
  return connection.define('ships', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    class: { type: Sequelize.STRING },
    size: { type: Sequelize.STRING },
    manufacturer: { type: Sequelize.STRING },
    weapons: { type: Sequelize.STRING },
    affiliations: { type: Sequelize.STRING },
    isUnique: { type: Sequelize.STRING },
  }, { paranoid: true })
}

module.exports = Ships
