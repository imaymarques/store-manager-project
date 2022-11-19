const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
productService = require('../../../src/services/product.service');
productController = require('../../../src/controllers/product.controller');
const mock = require('./productsControllers.mock');

describe('Verifica a camada Controller', () => {
  afterEach(function () { sinon.restore() });

  describe('Verifica a função getProducts', () => {
    it('Verifica se retorna todos os produtos', async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productService, 'getAllProducts').resolves({ type: null, message: mock.products })

      await productController.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mock.products);
    });
  });
  describe('Verifica a função getProductsById', () => {
    it('Verifica se retorna o produto pelo id', async () => {
      const req = {
        params: {
          id: 3,
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getAllProductsById').resolves({ type: null, message: mock.products[2] });
      await productController.getProductsById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mock.products[2]);
    });
    it('Verifica se tem erro ao passar o id errado', async () => {
      const req = {
        params: {
          id: 65468465
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getAllProductsById').resolves({ type: 404, message: 'Product not found' });
      await productController.getProductsById(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({message: 'Product not found'});
    });
  });
});