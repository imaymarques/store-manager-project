const productsModel = require('../models/product.model');

const validateProduct = (req, res, next) => {
  const { body } = req;
  const id = body.every(({ productId }) => productId);

  if (!id) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const validateQuantity = (req, res, next) => {
  const { body } = req;
  const isQuantityOk = body.every((el) => el.quantity || el.quantity === 0);
  const minQuantity = body.every(({ quantity }) => quantity >= 1);

  if (!isQuantityOk) return res.status(400).json({ message: '"quantity" is required' });

  if (!minQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const productNotFound = async (req, res, next) => {
  const { body } = req;
  const products = await productsModel.getProducts();
  const id = products.map((product) => product.id);
  const hasProduct = body.every(({ productId }) => id.includes(productId));

  if (!hasProduct) return res.status(404).json({ message: 'Product not found' });

  next();
};

module.exports = {
  validateProduct,
  validateQuantity,
  productNotFound,
};