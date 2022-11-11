const productService = require('../services/product.service');

const getProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getAllProductsById(id);
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsById,
};