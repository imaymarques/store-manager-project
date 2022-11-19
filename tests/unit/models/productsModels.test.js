const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/conection');
const productsModelMock = require('./productsModels.mock');
const productModel = require('../../../src/models/product.model');

describe('Verifica a camada Model', () => {
  afterEach(function () { sinon.restore() });

  describe('Verifica a função getProducts', () => {
    it('Verifica se retorna todos os produtos', async () => {
      sinon.stub(connection, 'execute').resolves([productsModelMock.allProducts]);
      const result = await productModel.getProducts();
      expect(result).to.be.deep.equal(productsModelMock.allProducts);
    });
  });
  describe('Verifica a função getProductsById', () => {
    it('Verifica se retorna um produto pelo Id', async () => {
      sinon.stub(connection, 'execute').resolves([[productsModelMock.id]]);
      const result = await productModel.getProductsById(1);
      expect(result).to.be.deep.equal(productsModelMock.id);
    });
  });
  describe('Verifica a função insertProducts', () => {
    it('Verifica se adiciona produtos', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }])
      const result = await productModel.insertProducts(productsModelMock.newProduct);

      expect(result).to.deep.equal({ id: 4 });
    });
  });
});