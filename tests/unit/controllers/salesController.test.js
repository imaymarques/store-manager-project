const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
salesService = require('../../../src/services/sales.service');
salesController = require('../../../src/controllers/sales.controller');
const mock = require('./salesController.mock');

describe('Verifica a camda Controller', () => {
  afterEach(function () { sinon.restore() });
  describe('Verifica a função getSales', () => {
    it('Verifica se retorna todas as vendas', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getSales').resolves({ type: null, message: mock.allSales });
      await salesController.getSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mock.allSales);
    });
    it('Verifica se retorna o erro ao não conseguir buscar as vendas', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getSales').resolves({ type: 404, message: 'Sale not found' });
      await salesController.getSales(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith('Sale not found');
    });
  });
});