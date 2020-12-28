/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const {
  shipsList, singleShip, newShip, smallShip, deleteThisShip
} = require('../mocks/ships')
const {
  getAllShips, getShipById, getShipsBySlug, getShipsByGTESize, getShipsByLTESize, saveNewShip, deleteShip
} = require('../../controllers/search')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - ships', () => {
  let sandbox
  let stubbedFindOne
  let stubbedFindAll
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus
  let stubbedDestroy

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindOne = sandbox.stub(models.Ships, 'findOne')
    stubbedFindAll = sandbox.stub(models.Ships, 'findAll')
    stubbedDestroy = sandbox.stub(models.Ships, 'destroy')
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
      stubbedFindAll.returns(shipsList)

      await getAllShips({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(shipsList)
    })
  })

  describe('getShipById', () => {
    it('retrieves the ship associated with the provided ID from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleShip)
      const request = { params: { id: 2 } }

      await getShipById(request, response)
      console.log(singleShip)
      expect(stubbedFindOne).to.have.been.calledWith({
        where: { id: 2 },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSend).to.have.been.calledWith(singleShip)
    })

    it('returns a 404 when no ship is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'not-found' }, }

      await getShipById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        where: { id: 'not-found' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getShipById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({

        where: { id: 'throw-error' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve ship, please try again')
    })
  })

  describe('getShipsBySlug', () => {
    it('retrieves the ship associated with the provided slug from the database', async () => {
      stubbedFindAll.returns(singleShip)
      const request = { params: { slug: 'aa-9-coruscant-freighter' } }

      await getShipsBySlug(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: { slug: 'aa-9-coruscant-freighter' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSend).to.have.been.calledWith(singleShip)
    })

    it('returns a 404 when no ship is found', async () => {
      stubbedFindAll.returns(null)
      const request = { params: { slug: 'not-found' }, }

      await getShipsBySlug(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: { slug: 'not-found' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      const request = { params: { slug: 'throw-error' } }

      await getShipsBySlug(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: { slug: 'throw-error' },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve ship, please try again')
    })
  })

  describe('getShipByGTESize', () => {
    it('retrieves a list of ships greater than or equal to the size provided', async () => {
      stubbedFindAll.returns(singleShip)
      const request = { params: { size: 100 } }

      await getShipsByGTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.gte]: 100 },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSend).to.have.been.calledWith(singleShip)
    })
    it('returns a 404 when no ship is found', async () => {
      stubbedFindAll.returns(null)
      const request = { params: { size: 'not-found' }, }

      await getShipsByGTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.gte]: 'not-found' },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      const request = { params: { size: 'throw-error' } }

      await getShipsByGTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.gte]: 'throw-error' },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve ship, please try again')
    })
  })

  describe('getShipByLTESize', () => {
    it('retrieves a list of ships greater than or equal to the size provided', async () => {
      stubbedFindAll.returns(smallShip)
      const request = { params: { size: 100 } }

      await getShipsByLTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.lte]: 100 },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSend).to.have.been.calledWith(smallShip)
    })
    it('returns a 404 when no ship is found', async () => {
      stubbedFindAll.returns(null)
      const request = { params: { size: 'not-found' }, }

      await getShipsByLTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.lte]: 'not-found' },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
      })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      const request = { params: { size: 'throw-error' } }

      await getShipsByLTESize(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          size: { [models.Op.lte]: 'throw-error' },
        },
        include: [{ model: models.Weapons, attributes: ['name'] },
          { model: models.Affiliations, attributes: ['name'] }
        ]
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

  describe('deleteShip', () => {
    it('deletes a ship from the database.', async () => {
      stubbedFindOne.returns(deleteThisShip)
      const request = { params: { id: 150 } }

      await deleteShip(request, response)

      expect(stubbedDestroy).to.have.calledWith({ where: { id: request.params.id } })
      expect(stubbedSend).to.have.been.calledWith(`Successfully deleted the ship: ${request.params.id}.`)
    })

    it('returns a 404 status and a message when no ship is found matching the id provided by the user.', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { id: 1000 } }

      await deleteShip(request, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusSend).to.have.been.calledWith(`No matching ship with id: ${request.params.id}`)
    })

    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('error')

      await deleteShip({}, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unknown error while deleting ship, please try again')
    })
  })
})
