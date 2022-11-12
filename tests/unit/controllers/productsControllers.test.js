// const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
productService = require('../../../src/services/product.service');
productController = require('../../../src/controllers/product.controller');
const { productsControllerMock, productsControllerByIdMock } = require('./productsControllers.mock');

describe('Verifica a camada Controller', () => {
  afterEach = () => {
    sinon.restore();
  };
  it('Verifica se retorna todos os produtos', async () => {
    sinon.stub(productService, 'getAllProducts').resolves({ type: null, message: productsControllerMock });
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.getProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsControllerMock);
  });
  it('Verifica se retorna o produto pelo id', async () => {
    sinon.stub(productService, 'getAllProductsById').resolves({ type: null, message: productsControllerByIdMock });
    const req = { params: { id: 3 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    req.status = sinon.stub().returns();
    await productController.getProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsControllerByIdMock);
  });
});