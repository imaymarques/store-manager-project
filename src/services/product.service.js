const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.getProducts();
  return { type: null, message: products };
};

const getAllProductsById = async (id) => {
  const result = await productModel.getProductsById(id);
  if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};

const insertProducts = async (name) => {
  const { id } = await productModel.insertProducts(name);
  return { type: 201, message: { id, name } };
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  insertProducts,
};