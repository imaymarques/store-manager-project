const connection = require('../conection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM getProducts.products',
  );
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * from getProducts.products WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  getProducts,
  getProductsById,
};