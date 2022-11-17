const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/conection');
const salesModel = require('../../../src/models/sales.model');
const mock = require('./salesModel.mock');

describe('Verifica a camada Model', () => {
  afterEach(function () { sinon.restore() });
  describe('Verifica a função getSales', () => {
    it('Verifica se retorna todas as vendas', async () => {
      sinon.stub(connection, 'execute').resolves([mock.salesModel]);
      const result = await salesModel.getSales();
      expect(result).to.be.deep.equal(mock.salesModel);
    });
  });
  describe('Verifica a função getSalesById', () => {
    it('Verifica se retorna uma venda pelo id', async () => {
      sinon.stub(connection, 'execute').resolves([mock.salesById]);
      const result = await salesModel.getSalesById(2);
      expect(result).to.be.deep.equal(mock.salesById);
    });
  });
});