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

const getProductsByName = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [[result]] = await connection.execute(query, [name]);
  return result;
};

const insertProducts = async (item) => {
  const insert = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  await connection.execute(insert, [item]);
  const result = await getProductsByName(item);
  return result;
};

module.exports = {
  getProducts,
  getProductsById,
  insertProducts,
  getProductsByName,
};