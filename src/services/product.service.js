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

const insertProducts = async (product) => {
  const { id } = await productModel.insertProducts(product);
  return { type: 201, message: id };
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  insertProducts,
};