// const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/conection');
const productsModelMock = require('./productsModels.mock');
const productModel = require('../../../src/models/product.model');

describe('Verifica a camada Model', () => {
  afterEach = () => {
    sinon.restore();
  };

  it('Verifica se retorna todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([productsModelMock]);
    const result = await productModel.getProducts();
    expect(result).to.be.deep.equal(productsModelMock);
  });
  it('Verifica se retorna um produto pelo Id', async () => {
    sinon.stub(connection, 'execute').resolves([[productsModelMock]]);
    const result = await productModel.getProductsById(1);
    expect(result).to.be.deep.equal(productsModelMock);
  });
});