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
  describe('Verifica a função getSalesById', () => {
    it('Verifica se retorna uma venda pelo id', async () => {
      const req = {
        params: 1,
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSalesById').resolves({ type: null, message: mock.idSales });
      await salesController.getSalesById(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
    it('Verifica mensagem de erro ao colocar id errado', async () => {
      const req = {
        params: 54454
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSalesById').resolves({ type: 404, message: 'Sale not found' });
      await salesController.getSalesById(req, res);
      expect(res.status).to.have.been.calledWith(404);
    });
  });
  describe('Verifica a função insertSalesOfProducts', () => {
    it('Verifica se é possível inserir uma venda', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'insertSale').resolves({ type: 201, message: mock.insertSales });
      await salesController.insertSalesOfProducts(req, res);
      expect(res.status).to.have.been.calledWith(201);
    });
  });
});