const Ships = (connection, Sequelize) => {
  return connection.define('ships', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    shipClass: { type: Sequelize.STRING, allowNull: false },
    size: { type: Sequelize.INTEGER, allowNull: false },
    manufacturer: { type: Sequelize.STRING, allowNull: false },
    isUnique: { type: Sequelize.STRING, allowNull: false },
    slug: { type: Sequelize.STRING },
  }, { paranoid: true })
}

module.exports = Ships
