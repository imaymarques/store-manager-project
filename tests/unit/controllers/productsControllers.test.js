const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
productService = require('../../../src/services/product.service');
productController = require('../../../src/controllers/product.controller');
const productsControllerMock = require('./productsControllers.mock');

describe('Verifica a camada Controller', () => {
  afterEach(function () { sinon.restore() });

  describe('Verifica a função getProducts', () => {
    it('Verifica se retorna todos os produtos', async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productService, 'getAllProducts').resolves({ type: null, message: productsControllerMock.products })

      await productController.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsControllerMock.products);
    });
  });
  // describe('Verifica a função getProductsById', () => {
  //   it('Verifica se retorna o produto pelo id', async () => {
  //     sinon.stub(productService, 'getAllProductsById').resolves({ type: null, message: productsControllerByIdMock });
  //     const req = { params: { id: 3 } };
  //     const res = {};
  //     res.status = sinon.stub().returns(res);
  //     req.status = sinon.stub().returns();
  //     await productController.getProductsById(req, res);
  //     expect(res.status).to.have.been.calledWith(200);
  //     expect(res.json).to.have.been.calledWith(productsControllerByIdMock[2]);
  // });
  // });
  // describe('Verifica a função insertProduct', () => {
  //   it('Verifica se insere o produto', async () => {
  //     const req = { body: [productsControllerMock.products] };
  //     const res = {};

  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub().returns();

  //     sinon.stub(productService, 'insertProducts').resolves({ type: null, message: productsControllerMock.newProduct });

  //     await productController.insertProduct(req, res);
  //     expect(res.status).to.have.be.calledWith(201);
  //     expect(res.json).to.have.be.calledWith(productsControllerMock.products);
  //   });
  // });
});