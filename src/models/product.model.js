const connection = require('../conection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * from StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

// const insertProducts = async (item) => {
//   const [{ result }] = await connection.execute(
//     'INSERT INTO StoreManager.products(item) VALUES(?)', item,
//   );
//   return result;
// };

module.exports = {
  getProducts,
  getProductsById,
  // insertProducts,
};