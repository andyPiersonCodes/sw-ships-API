/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { shipsList, singleShip, newShip } = require('../mocks/ships')
const { getAllShips, getShipsById, saveNewShip } = require('../../controllers/search')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - ships', () => {
  let sandbox
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindOne = sandbox.stub(models.Ships, 'findOne')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  describe('getAllShips', () => {
    it('retrieves a list of ships from the database and calls response.send() with the list', async () => {
      const stubbedFindAll = sinon.stub(models.Ships, 'findAll').returns(shipsList)

      await getAllShips({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(shipsList)
    })
  })

  describe('getShipsById', () => {
    it('retrieves the ship associated with the provided ID from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleShip)
      const request = { params: { id: 2 } }

      await getShipsById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        attributes: ['id', 'name', 'manufacturer', 'shipClass', 'size', 'isUnique', 'slug'],
        where: { id: 2 },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ],
      })
      expect(stubbedSend).to.have.been.calledWith(singleShip)
    })

    it('returns a 404 when no ship is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'not-found' }, }

      await getShipsById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        attributes: ['id', 'name', 'manufacturer', 'shipClass', 'size', 'isUnique', 'slug'],
        where: { id: 'not-found' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ],
      })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getShipsById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        attributes: ['id', 'name', 'manufacturer', 'shipClass', 'size', 'isUnique', 'slug'],
        where: { id: 'throw-error' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ],
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve ship, please try again')
    })
  })
  describe('saveNewShip', () => {
    it('accepts new ship details and saves them as a new ship, returning the saved record with a 201 status', async () => {
      const request = { body: newShip }
      const stubbedCreate = sinon.stub(models.Ships, 'create').returns(newShip)

      await saveNewShip(request, response)

      expect(stubbedCreate).to.have.been.calledWith(newShip)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusSend).to.have.been.calledWith(newShip)
    })
  })
})
