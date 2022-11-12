const { expect } = require('chai');
const sinon = require('sinon');
const { productsServiceMock, productsServiceByIdMock } = require('./productsServices.mock');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');

describe('Verifica a camada Services', () => {
  afterEach = () => {
    sinon.restore();
  };
  it('Verifica se retorna todos os produtos', async () => {
    sinon.stub(productModel, 'getProducts').resolves(productsServiceMock);
    const response = { type: null, message: productsServiceMock }
    const result = await productService.getAllProducts();
    expect(result).to.be.deep.equal(response);
  });
  it('Verifica se retorna o produto pelo id', async () => {
    sinon.stub(productModel, 'getProductsById').resolves(productsServiceByIdMock);
    const response = { type: null, message: productsServiceByIdMock };
    const result = await productService.getAllProductsById();
    expect(result).to.be.deep.equal(response);
  });
  it('Verifica se aparece mensagem de erro ao não encontrar produto', async () => {
    sinon.stub(productModel, 'getProductsById').resolves(undefined);
    const response = { type: 404, message: 'Product not found' };
    const result = await productService.getAllProductsById(55);
    expect(result).to.be.deep.equal(response);
  });
});