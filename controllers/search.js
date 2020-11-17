const ships = require('../ships')

const getIndex = (req, res) => {
  return res.render('index', { ships })
}

const getAllships = (req, res) => {
  return res.render('ships', { ships })
}

const notFound = (req, res) => {
  return res.sendStatus(400)
}

module.exports = {
  getIndex,
  getAllships,
  notFound
}
