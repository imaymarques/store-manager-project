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

const updateProducts = async (id, name) => {
  await productModel.updateProducts(id, name);
  const product = await productModel.getProductsById(id);
  if (product === undefined) return { type: 404, message: 'Product not found' };
  return { type: null, message: { id, name } };
};

const deleteProduct = async (id) => {
  const response = await productModel.getProductsById(id);
  if (!response) return { type: 404, message: 'Product not found' };
  await productModel.deleteProduct(id);
  return { type: null, message: null };
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  insertProducts,
  updateProducts,
  deleteProduct,
};