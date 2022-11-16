const { expect } = require('chai');
const sinon = require('sinon');
const productsServiceMock = require('./productsServices.mock');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');

const idInvalido = 55;
const idValido = 3;
const insertId = 4;
const inserName = 'Capa da Feiticeira Escarlate';

describe('Verifica a camada Service', () => {
  afterEach(function () { sinon.restore() });

  describe('Verifica a função getAllProducts', () => {
    it('Verifica se retorna todos os produtos', async () => {
      sinon.stub(productModel, 'getProducts').resolves(productsServiceMock.products);
      const response = await productService.getAllProducts();
      expect(response).to.be.deep.equal({ type: null, message: productsServiceMock.products });
    });
  });
  describe('Verifica a função getAllProductsById', () => {
    it('Verifica se retorna os produtos pelo id', async () => {
      sinon.stub(productModel, 'getProductsById').resolves(productsServiceMock.products[2]);
      const response = await productService.getAllProductsById(idValido);
      expect(response).to.be.deep.equal({ type: null, message: productsServiceMock.products[2] });
    });
    it('Verifica se retorna erro ao passar id inválido', async () => {
      sinon.stub(productModel, 'getProductsById').resolves(undefined);
      const response = await productService.getAllProductsById(idInvalido);
      expect(response).to.be.deep.equal({ type: 404, message: 'Product not found' });
    });
  });
  // describe('Verifica a função insertProducts', () => {
  //   it('Verifica se é possível inserir produtos', async () => {
  //     sinon.stub(productModel, 'insertProducts').resolves(undefined);
  //     const response = await productService.insertProducts(productsServiceMock.newProduct);
  //     expect(response).to.be.deep.equal({ type: 201, message: { id: insertId, name: inserName } });
  //   });
  // });
});