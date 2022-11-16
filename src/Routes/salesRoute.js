const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateProduct, validateQuantity,
  productNotFound } = require('../middlewares/sales.middlewares');

const salesRouter = express.Router();

salesRouter.post('/', validateProduct, validateQuantity,
  productNotFound, salesController.insertSalesOfProducts);

module.exports = salesRouter;