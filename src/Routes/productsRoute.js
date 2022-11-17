const express = require('express');
const productController = require('../controllers/product.controller');
const validateName = require('../middlewares/products.middleware');

const productsRouter = express.Router();

productsRouter.get('/', productController.getProducts);
productsRouter.get('/:id', productController.getProductsById);
productsRouter.post('/', validateName, productController.insertProduct);
productsRouter.put('/:id', validateName, productController.updateProducts);

module.exports = productsRouter;