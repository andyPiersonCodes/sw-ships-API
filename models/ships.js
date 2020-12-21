const Ships = (connection, Sequelize) => {
  return connection.define('ships', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    shipClass: { type: Sequelize.STRING },
    size: { type: Sequelize.STRING },
    manufacturer: { type: Sequelize.STRING },
    isUnique: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
  }, { paranoid: true })
}

module.exports = Ships
