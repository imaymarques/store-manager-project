const express = require('express');
const productController = require('./controllers/product.controller');

const productsRouter = express.Router();

productsRouter.get('/', productController.getProducts);
productsRouter.get('/:id', productController.getProductsById);
productsRouter.post('/', productController.insertProduct);

module.exports = productsRouter;