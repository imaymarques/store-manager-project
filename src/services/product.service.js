const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.getProducts();
  if (!products) return { type: 404, message: 'Product not found' };
  return { type: null, message: products };
};

const getAllProductsById = async (id) => {
  const result = await productModel.getProductsById(id);
  if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};

const insertProducts = async (product) => {
  await Promise.all(product.map(async (products) => productModel.insertProduct(products)));
  return getAllProducts();
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  insertProducts,
};