const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../../src/conection');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const mock = require('./salesService.mock');

describe('Testa a camada Service', () => {
  afterEach(function () { sinon.restore() });
  describe('Verifica a função getSales', () => {
    it('Verifica se retorna todas as vendas', async () => {
      sinon.stub(salesModel, 'getSales').resolves(mock.allSales);
      const result = await salesService.getSales();
      expect(result).to.be.deep.equal({ type: null, message: mock.allSales });
    });
  });
  describe('Verifica a função getSalesById', () => {
    it('Verifica se retorna um erro com o id inválido', async () => {
      sinon.stub(salesModel, 'getSalesById').resolves(undefined);
      const result = await salesService.getSalesById(55);
      expect(result).to.be.deep.equal({ type: 404, message: 'Sale not found' });
    });
    it('Verifica se retorna o id válido', async () => {
      sinon.stub(salesModel, 'getSalesById').resolves(mock.salesById);
      const result = await salesService.getSalesById(1);
      expect(result).to.be.deep.equal({ type: null, message: mock.salesById });
    });
  });
});