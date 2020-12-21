/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { shipsList } = require('../mocks/ships')
const { getAllShips } = require('../../controllers/search')

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
})
